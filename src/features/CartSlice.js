import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const getcart=()=>{
  return JSON.parse(localStorage.getItem("cart")) || []
}
const getAmount=()=>{
  return localStorage.getItem("cartAmount") || 0
}
const getCount=()=>{
  return localStorage.getItem("cartCount") || 0
}

const initialState = {
  isLoading: false,
  isError: false,
  all: [],
  cart: getcart(),
  totalAmount: getAmount(),
  totalCount:getCount() 
};
export const getAll = createAsyncThunk(
  "getAllCart/cart",
  async (_, thunkAPI) => {
    try {
      let data = await fetch(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );
      data = await data.json();
    //   console.log(data)
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error in fetching data");
    }
  }
);
const cartSlice = createSlice({

  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload: { id, price, quantity, name, imageURL } }) => {
      console.log(state.all);
      console.log("add");
      let product = state.cart.find((item) => item.id === id);
      if (product) {
        state.cart.map((cartItem) => {
          if (cartItem.id === id) {
            if (cartItem.count < quantity) {
              cartItem.count += 1;
            }
            cartItem.total = cartItem.count * price;
          }
          return state.cart
        });
      } else {
        state.cart.push({
          name,
          id,
          count: 1,
          price,
          total: price,
          quantity,
          imageURL,
        });
      }
      state.totalCount=state.cart.map((item)=>item.count).reduce((item,acc)=>item+acc,0)
      state.totalAmount=state.cart.map((item)=>item.total).reduce((item,acc)=>item+acc,0)
      localStorage.setItem("cart",JSON.stringify(state.cart))
      localStorage.setItem("cartAmount",state.totalAmount)
      localStorage.setItem("cartCount",state.totalCount)
      // console.log(state.totalAmount, state.totalCount)
    },
    inc: (state, { payload: {id} }) => {
        // console.log("addd")
    let temp=state.cart.find((item)=>item.id===id)
    if(temp.quantity>temp.count){
        temp.count+=1
        temp.total=temp.price*temp.count
    }
    state.totalCount=state.cart.map((item)=>item.count).reduce((item,acc)=>item+acc,0)
    state.totalAmount=state.cart.map((item)=>item.total).reduce((item,acc)=>item+acc,0)
    localStorage.setItem("cart",JSON.stringify(state.cart))
    localStorage.setItem("cartAmount",state.totalAmount)
    localStorage.setItem("cartCount",state.totalCount)
    },
    dec: (state,{ payload: {id} }) => {
        // console.log("cb")
        let temp=state.cart.find((item)=>item.id===id)
        if(1<temp.count){
            temp.count-=1
            temp.total=temp.price*temp.count
        }
        state.totalCount=state.cart.map((item)=>item.count).reduce((item,acc)=>item+acc,0)
        state.totalAmount=state.cart.map((item)=>item.total).reduce((item,acc)=>item+acc,0)
        localStorage.setItem("cart",JSON.stringify(state.cart))
        localStorage.setItem("cartAmount",state.totalAmount)
        localStorage.setItem("cartCount",state.totalCount)
    },
    deleteProduct: (state, { payload: { id } }) => {
        // console.log("fsyua")
      let temp=state.cart.filter((item) => item.id !== id);
      state.cart=temp
      state.totalCount=state.cart.map((item)=>item.count).reduce((item,acc)=>item+acc,0)
      state.totalAmount=state.cart.map((item)=>item.total).reduce((item,acc)=>item+acc,0)
      localStorage.setItem("cart",JSON.stringify(state.cart))
      localStorage.setItem("cartAmount",state.totalAmount)
      localStorage.setItem("cartCount",state.totalCount)
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalCount=0
      localStorage.setItem("cart",JSON.stringify(state.cart))
      localStorage.setItem("cartAmount",state.totalAmount)
      localStorage.setItem("cartCount",state.totalCount)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAll.fulfilled, (state, { payload }) => {
        // console.log(payload)
        state.isLoading = false;
        state.data = [...payload];
        state.products = [...payload];
      })
      .addCase(getAll.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
export const { clearCart, deleteProduct, dec, inc, addToCart } =
  cartSlice.actions;
export default cartSlice.reducer;

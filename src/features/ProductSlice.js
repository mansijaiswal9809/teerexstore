import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: [],
  isError: false,
  isSidebarOpen: false,
  products: [],
  filteredData: [],
  colors: ["all"],
  types: ["all"],
  genders: ["all"],
};

export const getAllProducts = createAsyncThunk(
  "allProducts/getAllProducts",
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
const allProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    showSideBar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    searchProducts: (state, { payload: { val } }) => {
      // console.log(val)
      state.products = state.data.filter((item) => item.name.startsWith(val));
    },
    AllProducts: (state) => {
      state.products = state.data;
    },
    getFilteredData: (state) => {
      state.filteredData = state.products;
    },
    updateFilter: (state, { payload: { type, value } }) => {
      // console.log(type)
      // console.log(value)
      if (type === "colors") {
        if (state.colors[state.colors.length - 1] === "all") {
          state.colors.splice(state.colors.length - 1, 1);
        }
        const colors = [...state.colors];
        let index = colors.indexOf(value);
        if (index === -1) {
          colors.push(value);
        } else {
          colors.splice(index, 1);
        }
        if (colors.length === 9 || colors.length === 0) {
          colors.push("all");
        }
        state.colors=colors
        // console.log(state.colors)
      } else if (type === "gender") {
        if (state.genders[state.genders.length - 1] === "all") {
          state.genders.splice(state.genders.length - 1, 1);
        }
        let genders = [...state.genders];
        let index = genders.indexOf(value);
        if (index === -1) {
          genders.push(value);
        } else {
          genders.splice(index, 1);
        }
        if (genders.length === 2 || genders.length === 0) {
          genders.push("all");
        }
        state.genders=genders;
      } else if (type === "types") {
        if (state.types[state.types.length - 1] === "all") {
          state.types.splice(state.types.length - 1, 1);
        }
        let types = [...state.types];
        let index = types.indexOf(value);
        if (index === -1) {
          types.push(value);
        } else {
          types.splice(index, 1);
        }
        if (types.length === 3 || types.length === 0) {
          types.push("all");
        }
        state.types=types;
      }
    },
    filter: (state) => {
      // console.log('gggggggg')
      let newList = [];
      if (state.colors[state.colors.length - 1] !== "all") {
        for (let i = 0; i < state.colors.length; i++) {
          for (let j = 0; j < state.products.length; j++) {
            if (state.colors[i] === state.products[j].color) {
              newList.push(state.products[j]);
            }
          }
        }
      } else {
        newList = [...state.products];
      }
      let List = [];
      if (state.genders[state.genders.length - 1] !== "all") {
        for (let i = 0; i < state.genders.length; i++) {
          for (let j = 0; j < newList.length; j++) {
            if (state.genders[i] === newList[j].gender) {
              List.push(newList[j]);
            }
          }
        }
      } else {
        List = [...newList];
      }
      let ListN = [];
      if (state.types[state.types.length - 1] !== "all") {
        for (let i = 0; i < state.types.length; i++) {
          for (let j = 0; j < List.length; j++) {
            if (state.types[i] === List[j].type) {
              ListN.push(List[j]);
            }
          }
        }
      } else {
        ListN = [...List];
      }
   state.filteredData=ListN
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, {payload}) => {
        // console.log(payload)
        state.isLoading = false;
        state.data = [...payload];
        state.products = [...payload];
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { showSideBar, searchProducts, AllProducts, getFilteredData,updateFilter,filter,closeSidebar } =
  allProductsSlice.actions;
export default allProductsSlice.reducer;

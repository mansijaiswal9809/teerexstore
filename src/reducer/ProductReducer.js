import { CLOSE_SIDEBAR, GET_ALL_PRODUCTS, IS_ERROR, IS_LOADING, OPEN_SIDEBAR, SEARCH_PRODUCTS, SET_DATA } from "../utils/action";
const ProductReducer=(state,action)=>{
if(action.type===IS_LOADING){
    return {...state,isLoading:true}
}
if(action.type===SET_DATA){
    return {...state,isLoading:false,data:[...action.payload],products:[...action.payload]}
}
if(action.type===IS_ERROR){
    return{...state, isError:true}
}
if(action.type===OPEN_SIDEBAR){
    return{...state, isSidebarOpen:true}
}
if(action.type===CLOSE_SIDEBAR){
    return{...state, isSidebarOpen:false}
}
if(action.type===GET_ALL_PRODUCTS){
    return {...state,products:[...action.payload]}
}
if(action.type===SEARCH_PRODUCTS){
    const {text,Data}=action.payload
    let newData=Data.filter((item)=>item.name.startsWith(text))
    console.log(newData)
    return {...state,products:[...newData]}
}
return state
}

export default ProductReducer
import { IS_ERROR, IS_LOADING, SET_DATA } from "../utils/action";
const ProductReducer=(state,action)=>{
if(action.type===IS_LOADING){
    return {...state,isLoading:true}
}
if(action.type===SET_DATA){
    return {...state,isLoading:false,data:[...action.payload]}
}
if(action.type===IS_ERROR){
    return{...state, isError:true}
}
if(action.type==="open"){
    return{...state, isSidebarOpen:true}
}
if(action.type==="close"){
    return{...state, isSidebarOpen:false}
}
return state
}

export default ProductReducer
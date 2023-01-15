const ProductReducer=(state,action)=>{
if(action.type==="IS_LOADING"){
    return {...state,isLoading:true}
}
if(action.type==="SET_DATA"){
    return {...state,isLoading:false,data:[...action.payload]}
}
if(action.type==="IS_ERROR"){
    return{...state, isError:true}
}
}

export default ProductReducer
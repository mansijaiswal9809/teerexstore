// import { useProductContext } from "../context/ProductProvider";
import {
  UPDATE_COLORS,
  UPDATE_GENDERS,
  UPDATE_TYPES,
  FILTER_PRODUCTS,
  GET_FILTERED_DATA,
  CLEAR_FILTER,
} from "../utils/action";

const filterReducer = (state, action) => {
  if (action.type === GET_FILTERED_DATA) {
    return { ...state, filteredData: [...action.payload] };
  }
  if (action.type === UPDATE_COLORS) {
    if (state.colors[state.colors.length - 1] === "all") {
      state.colors.splice(state.colors.length - 1, 1);
    }
    const colors = [...state.colors];
    let index = colors.indexOf(action.payload);
    if (index === -1) {
      colors.push(action.payload);
    } else {
      colors.splice(index, 1);
    }
    if (colors.length === 9 || colors.length === 0) {
      colors.push("all");
    }
    return { ...state, colors };
  }
  if (action.type === UPDATE_GENDERS) {
    if (state.genders[state.genders.length - 1] === "all") {
      state.genders.splice(state.genders.length - 1, 1);
    }
    let genders = [...state.genders];
    let index = genders.indexOf(action.payload);
    if (index === -1) {
      genders.push(action.payload);
    } else {
      genders.splice(index, 1);
    }
    if (genders.length === 2 || genders.length === 0) {
      genders.push("all");
    }
    return { ...state, genders };
  }
  if (action.type === UPDATE_TYPES) {
    if (state.types[state.types.length - 1] === "all") {
      state.types.splice(state.types.length - 1, 1);
    }
    let types = [...state.types];
    let index = types.indexOf(action.payload);
    if (index === -1) {
      types.push(action.payload);
    } else {
      types.splice(index, 1);
    }
    if (types.length === 3 || types.length === 0) {
      types.push("all");
    }
    return { ...state, types };
  }
  if (action.type === FILTER_PRODUCTS) {
    let products = [...action.payload];
    let newList = [];
    if (state.colors[state.colors.length - 1] !== "all") {
      for (let i = 0; i < state.colors.length; i++) {
        for (let j = 0; j < products.length; j++) {
          if (state.colors[i] === products[j].color) {
            newList.push(products[j]);
          }
        }
      }
    } else {
      newList = [...products];
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
    return { ...state, filteredData: ListN };
  }
  if (action.type === CLEAR_FILTER) {
    return { ...state, colors: ["all"], types: ["all"], genders: ["all"] };
  }
  return state;
};
export default filterReducer;

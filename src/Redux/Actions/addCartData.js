import { ADD_TO_CART } from "../Constant";

export const addCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data
  };
}


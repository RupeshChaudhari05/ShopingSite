import { SAVE_MESSAGE } from "../Constant";

export const saveMessage = (data) => {
  return {
    type: SAVE_MESSAGE,
    payload: data
  };

}
import { SAVE_MESSAGE } from "../Constant";
const initialState = {
  listofmessage: []
}
const sendMessage = (state = initialState, { type, payload }) => {

  switch (type) {
    case SAVE_MESSAGE:
      return {
        ...state,
        listofmessage: [...state.listofmessage, payload]
      }
      break;
    default:
      return state;
      break;
  }
}

export default sendMessage;
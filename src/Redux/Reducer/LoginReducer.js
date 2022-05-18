import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../Constant";


const intitial = {
  loginToken: ""
}

const LoginReducer = (state = intitial, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginToken: payload
      }
      break;
    case LOGIN_FAIL:
      return {
        ...state,
        loginToken: ""
      }
      break;
    case LOGOUT:
      return {
        ...state,
        loginToken: ""
      }
      break;
    default:
      return state;
      break;
  }
}

export default LoginReducer
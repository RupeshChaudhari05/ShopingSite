import { LOGIN_SUCCESS, LOGOUT } from "../Constant"

export const LoginAction = (data) => {
  console.log("dddddddddddd", data);
  return {
    type: LOGIN_SUCCESS,
    payload: data
  }
}

export const Logout = () => {
  return {
    type: LOGOUT,
    payload: ""
  }
}


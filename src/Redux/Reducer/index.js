import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import LoginReducer from "./LoginReducer";


export const reducer = combineReducers({ LoginData: LoginReducer, cartData: cartReducer });
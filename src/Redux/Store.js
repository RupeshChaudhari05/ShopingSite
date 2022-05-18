import { createStore } from "redux";
import { reducer } from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(reducer, composeWithDevTools());
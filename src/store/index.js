import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productReducer from "./product";

const reducers = combineReducers({
  product: productReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

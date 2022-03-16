import { combineReducers, createStore } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";


// createStore function steps up a new data store using a reducer.
export const SportsStoreDataStore = createStore(CommonReducer(ShopReducer, CartReducer));
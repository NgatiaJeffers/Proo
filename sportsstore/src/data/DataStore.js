import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";


// createStore function steps up a new data store using a reducer.
export const SportsStoreDataStore = createStore(ShopReducer);
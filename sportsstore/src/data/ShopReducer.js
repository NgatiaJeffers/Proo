import { ActionTypes } from "./Types";

export const ShopReducer = (storeData, action) => {
    switch(action.type) {
        case ActionTypes.DATA_LOAD:
            return {
                ...storeData,
                [action.payload.dataTypes]: action.payload.data
            };
        default:
            return storeData || {};
    }
}
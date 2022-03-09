import { ActionTypes } from "./Types";
import { data as phData } from "./placeholderData";

export const loadData = (dataTypes) => ({
    type: ActionTypes.DATA_LOAD,
    payload: {
        dataTypes: dataTypes,
        data:phData[dataTypes]
    }
});
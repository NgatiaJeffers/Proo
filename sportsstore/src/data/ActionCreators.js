import { ActionTypes } from "./Types";
import { data as phData } from "./placeholderData";

export const loadData = (dataType) => ({
    type: ActionTypes.DATA_LOAD,
    payload: {
        dataType: dataType,
        data:phData[dataType]
    }
});

// type property values specifies the type of change required 
// to the data store.

// The payload property for the action object has a dataType property
// that indicates the type of data that the action relates to and a data
// property that provides the data to be added to the data store
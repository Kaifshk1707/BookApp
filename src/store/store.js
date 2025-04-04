
import {combineReducers, createStore} from "redux";
import { dataReducer } from "./reducers/dataReducer";
import { profileReducer } from "./reducers/profileReducer";


const rootReducer = combineReducers({
    dataReducer: dataReducer,
    adminRole:profileReducer
})

const store = createStore(rootReducer);

export default store;
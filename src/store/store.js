
import {combineReducers, createStore} from "redux";
import { dataReducer } from "./reducers/dataReducer";
import {searchReducer} from "./reducers/searchReducer";


const rootReducer = combineReducers({
    dataReducer: dataReducer,
    searchReducer:searchReducer
})

const store = createStore(rootReducer);

export default store;
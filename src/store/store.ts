import { createStore, combineReducers } from "redux";

import { dataReducer } from "./reducers/dataReducer";
import settingReducer from "./reducers/settingReducer";

const rootReducer = combineReducers({
  dataReducer: dataReducer,
  settingReducer: settingReducer,
});

const store = createStore(rootReducer);

export default store;

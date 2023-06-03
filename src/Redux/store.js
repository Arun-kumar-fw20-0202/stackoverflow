import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./user/user.reducer";
import { quesReducer } from "./Question/ques.reducer";

const rootReducer = combineReducers({
  userReducer,
  quesReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

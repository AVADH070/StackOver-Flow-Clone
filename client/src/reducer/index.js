import { combineReducers } from "redux";
import authReducer from './auth'
import currretUserReducer from './currenUser'
import { questionReducer } from "./question";
import usersReducer from "./users";

export default combineReducers({ authReducer, currretUserReducer, questionReducer, usersReducer })
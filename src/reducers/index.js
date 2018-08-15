import {combineReducers} from "redux";
import apidata from './apidata';

const rootreducer = combineReducers({
  apidata: apidata
});

export default rootreducer;
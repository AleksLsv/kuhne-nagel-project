import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import shipmentsReducer from "./shipments-reducer";
import { thunk as thunkMidleware } from "redux-thunk";
import anyReducer from "./any-reducer";



let reducers = combineReducers({
    shipmentsR: shipmentsReducer,
    another: anyReducer
});

const store = legacy_createStore(reducers, applyMiddleware(thunkMidleware));


window.__store__ = store;


export default store;
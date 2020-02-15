import {applyMiddleware, createStore} from "redux";
import {Reducers} from "./reducers";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const logger = createLogger();

export class Store {
    static createAppStore(initialState) {

        return createStore(Reducers.getReducers(), initialState, applyMiddleware(thunk, logger))
    }
}

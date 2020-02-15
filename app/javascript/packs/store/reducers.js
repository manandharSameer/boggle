import {combineReducers} from "redux";

export class Reducers {
    static getReducers() {
        return combineReducers({
            gameReducer
        });
    }
}

const gameReducer = (state, action) => {
    return {
        user: 'sameer'
    };
};

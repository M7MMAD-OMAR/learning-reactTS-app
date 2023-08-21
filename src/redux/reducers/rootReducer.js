import {combineReducers} from "redux";
import {INCREMENT} from "../type";

export const counterReducer = (state = {counter: 0}, action) => {
    switch (action.type) {
        case INCREMENT:
            return {counter: state.counter + 1}
        default:
            return state
    }
}


export const rootReducer = combineReducers({
    counterReducer: counterReducer
})



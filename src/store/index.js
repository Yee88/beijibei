import {createStore,combineReducers,applyMiddleware} from "redux"
import {navbarReducer} from "./reducers/navbarReducer"
import {listReducer} from "./reducers/listReducer"
import {guideCataReducer} from "./reducers/guideCataReducer"
import promiseMiddle from "redux-promise"
var reducer=combineReducers({
    navbarReducer,
    listReducer,
    guideCataReducer

})
const store=createStore(reducer,applyMiddleware(promiseMiddle))
export default store
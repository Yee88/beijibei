import {createStore,combineReducers} from "redux"
import {navbarReducer} from "./reducers/navbarReducer"
import {listReducer} from "./reducers/listReducer"
var reducer=combineReducers({
    navbarReducer,
    listReducer
})
const store=createStore(reducer)
export default store
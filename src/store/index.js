import {createStore,combineReducers,applyMiddleware} from "redux"
import {navbarReducer} from "./reducers/navbarReducer"
import {listReducer} from "./reducers/listReducer"
import {guideCataReducer} from "./reducers/guideCataReducer"
import {communityListReducer} from "./reducers/communityListReducer"
import {usesListReducer} from "./reducers/usesListReducer"
import promiseMiddle from "redux-promise"
var reducer=combineReducers({
    navbarReducer,
    listReducer,
    guideCataReducer,
    communityListReducer,
    usesListReducer

})
const store=createStore(reducer,applyMiddleware(promiseMiddle))
export default store
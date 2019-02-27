import {HashRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import React from "react"
import App from "../App"
import Home from "../views/Home"
import Word from "../views/Word"
import Guide from "../views/Word/Guide"
import GuideCate from "../views/Word/Guide/GuideCate"
import Market from "../views/Word/Market"
import Wordbook from "../views/Word/Wordbook"
import Wordlibrary from "../views/Word/Wordlibrary"
import Listen from "../views/Listen"
import Books from "../views/Listen/Books"
import Spoken from "../views/Spoken"
import Reading from "../views/Reading"
import Practice from "../views/Practice"
import Course from "../views/Course"
import Community from "../views/Community"
import Login from "../views/Login"
import Register from "../views/Register"
import { Provider } from "react-redux"
import store from "../store"
var router = (
    <Provider store={store}>
    <Router>
        <App>
            <Switch>
                <Route path="/home" component={Home} replace/>
                <Route path="/word" render={(props)=>
                        <Word {...props}>
                            <Switch>
                                <Route path="/word/guide" render={(props)=>
                                    <Guide {...props}>
                                        <Switch>
                                            <Route path="/word/guide/categories/:id" component={GuideCate} replace/>
                                        </Switch>
                                    </Guide>
                                } replace/>
                                <Route path="/word/market" component={Market} replace/>
                                <Route path="/word/wordbook" component={Wordbook} replace/>
                                <Route path="/word/wordlirary" component={Wordlibrary} replace/>
                                <Redirect path="/word" to="/word/guide"/>
                            </Switch>
                        </Word>
                } replace/>
                <Route path="/listen" render={(props)=>
                    <Listen {...props}>
                        <Switch>
                            <Route path="/listen/books/:id" component={Books}/>
                        </Switch>
                    </Listen>
                }/>
                <Route path="/spoken" component={Spoken} replace/>
                <Route path="/reading" component={Reading} replace/>
                <Route path="/practice" component={Practice} replace/>
                <Route path="/course" component={Course} replace/>
                <Route path="/community" component={Community} replace/>
                <Route path="/login" component={Login} replace/>
                <Route path="/register" component={Register} replace/>
                <Redirect from="/" to="/home" exact/>
            </Switch>
        </App>
    </Router>
    </Provider>
)
export default router;
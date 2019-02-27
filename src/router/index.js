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
                <Route path="/home" component={Home}/>
                <Route path="/word" render={(props)=>
                        <Word {...props}>
                            <Switch>
                                <Route path="/word/guide" render={(props)=>
                                    <Guide {...props}>
                                        <Switch>
                                            <Route path="/word/guide/categories/:id" component={GuideCate}/>

                                        </Switch>
                                    </Guide>
                                }/>
                                <Route path="/word/market" component={Market}/>
                                <Route path="/word/wordbook" component={Wordbook}/>
                                <Route path="/word/wordlirary" component={Wordlibrary}/>
                                <Redirect path="/word" to="/word/guide"/>
                            </Switch>
                        </Word>
                }/>
                <Route path="/listen" component={Listen}/>
                <Route path="/spoken" component={Spoken}/>
                <Route path="/reading" component={Reading}/>
                <Route path="/practice" component={Practice}/>
                <Route path="/course" component={Course}/>
                <Route path="/community" component={Community}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Redirect from="/" to="/home" exact/>
            </Switch>
        </App>
    </Router>
    </Provider>
)
export default router;
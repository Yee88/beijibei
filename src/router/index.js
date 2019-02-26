import {HashRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import React from "react"
import App from "../App"
import Home from "../views/Home"
import Word from "../views/Word"
import Guide from "../views/Word/Guide"
import Market from "../views/Word/Market"
import Wordbook from "../views/Word/Wordbook"
import Wordlibrary from "../views/Word/Wordlibrary"
import Listen from "../views/Listen"
import Spoken from "../views/Spoken"
import Reading from "../views/Reading"
import Practice from "../views/Practice"
import Course from "../views/Course"
import Community from "../views/Community"
import { Provider } from "react-redux"
import store from "../store"
var router = (
    <Provider store={store}>
    <Router>
        <App>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/word" exact render={(props)=>
                        <Word {...props}>
                            <Switch>
                                <Route path="/word/guide" component={Guide}/>
                                <Route path="/word/market" component={Market}/>
                                <Route path="/word/wordbook" component={Wordbook}/>
                                <Route path="/word/wordlirary" component={Wordlibrary}/>
                                
                            </Switch>
                        </Word>
                }/>
                <Route path="/listen" component={Listen}/>
                <Route path="/spoken" component={Spoken}/>
                <Route path="/reading" component={Reading}/>
                <Route path="/practice" component={Practice}/>
                <Route path="/course" component={Course}/>
                <Route path="/community" component={Community}/>
                <Redirect from="/" to="/home" exact/>
            </Switch>
        </App>
    </Router>
    </Provider>
)
export default router;
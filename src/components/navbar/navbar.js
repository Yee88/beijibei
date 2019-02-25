import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"
import yee from "./navbar.module.scss"
class Navbar extends Component{
    state={
        
    }
    componentDidMount(){
       
    }
    render(){
        return <div>
             {
                this.props.isShow?
                <div className={yee.navbar}>
                    <div className={yee.container}>
                        <ul className={yee.nav}>
                            <li><NavLink to="/home" replace><img src={"https://static.baydn.com/static/img/logo_v4.png"} alt=""/></NavLink></li>
                            <li><NavLink to="/home" replace>首页</NavLink></li>
                            <li><NavLink to="/word" replace>单词</NavLink></li>
                            <li><NavLink to="/listen" replace>听力</NavLink></li>
                            <li><NavLink to="/spoken" replace>口语</NavLink></li>
                            <li><NavLink to="/artical" replace>短文</NavLink></li>
                            <li><NavLink to="/reading" replace>读书</NavLink></li>
                            <li><NavLink to="/practice" replace>炼句</NavLink></li>
                            <li><NavLink to="/course" replace>课程</NavLink></li>
                            <li><NavLink to="/community" replace>社区</NavLink></li>
                        </ul>
                        <div className={yee.navright}>
                            <input type="text"/>
                            <ul className={yee.navhelp}>
                                <li>帮助</li>
                                <li>动态获取</li>
                            </ul>
                        </div>

                    </div>
                </div>
                :null
             }
        </div>
    }
}
var mapStateToProps=(state)=>({
    isShow:state.navbarReducer,
    datalist:state.listbarReducer
})
export default connect(mapStateToProps,null)(Navbar)

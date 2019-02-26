import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import store from "../../store"
import yee from "./navbar.module.scss"
class Navbar extends Component{
    state={
        isShow:store.getState().navbarReducer,
        ulShow0:false,
        ulShow1:false,
        ulShow3:false,
        ulShow5: false,
        ulShow7: false
    }
    componentDidMount(){
       store.subscribe(()=>{
            console.log("message",store.getState())
            this.setState({
                isShow:store.getState().navbarReducer
            })
        })
    }
    render(){
        return <div>
             {
                this.state.isShow?
                <div className={yee.nafvbar}>
                    <div className={yee.container}>
                        <ul className={yee.nav}>
                            <li><NavLink to="/home"replace><img src="https://static.baydn.com/static/img/logo_v4.png" alt=""/></NavLink></li>
                            <li><NavLink to="/home" replace>首页</NavLink></li>
                            <li onClick={this.handleClick0.bind(this)}><NavLink to="/word" exact activeClassName="active" replace>单词</NavLink>
                            {
                                this.state.ulShow0?
                                <ul className={yee.navSec}>
                                    <li><NavLink to="/word/guide">单词学习</NavLink></li>
                                    <li><NavLink to="/word/market">扩展包</NavLink></li>
                                    <li><NavLink to="/word/wordbook">单词书</NavLink></li>
                                    <li><NavLink to="/word/wordlibrary">我的词库</NavLink></li>
                                </ul>
                                :null
                            }
                            </li>
                            <li onClick={this.handleClick1.bind(this)}><NavLink to="/listen" activeClassName="active" replace>听力</NavLink>
                            {
                                this.state.ulShow1?
                                <ul className={yee.navSec}>
                                    <li><NavLink to="/word/guide">听力学习</NavLink></li>
                                    <li><NavLink to="/word/market">听力课程</NavLink></li>
                                    <li><NavLink to="/word/wordbook">听力计划</NavLink></li>
                                    <li><NavLink to="/word/wordlibrary">购买提示</NavLink></li>
                                </ul>
                                :null
                            }  
                            </li>
                            <li onClick={this.handleClick2.bind(this)}><NavLink to="/spoken" activeClassName="active" replace>口语</NavLink></li>
                            <li onClick={this.handleClick3.bind(this)}><NavLink to="/artical" activeClassName="active" replace>短文</NavLink>
                            {
                                this.state.ulShow3?
                                <ul className={yee.navSec}>
                                    <li><NavLink to="/word/guide">短文首页</NavLink></li>
                                    <li><NavLink to="/word/market">我的短文</NavLink></li>
                                    <li><NavLink to="/word/wordbook">短文计划</NavLink></li>
                                    <li><NavLink to="/word/wordlibrary">短文进度</NavLink></li>
                                </ul>
                                :null
                            }  
                            </li>
                            <li onClick={this.handleClick4.bind(this)}><NavLink to="/reading" activeClassName="active" replace>读书</NavLink></li>
                            <li onClick={this.handleClick5.bind(this)}><NavLink to="/practice" activeClassName="active" replace>炼句</NavLink>
                            {
                                this.state.ulShow5?
                                <ul className={yee.navSec}>
                                    <li><NavLink to="/word/guide">炼句学习</NavLink></li>
                                    <li><NavLink to="/word/market">课程</NavLink></li>
                                    <li><NavLink to="/word/wordbook">炼句计划</NavLink></li>
                                    <li><NavLink to="/word/wordlibrary">炼句设置</NavLink></li>
                                </ul>
                                :null
                            }
                            </li>
                            <li onClick={this.handleClick6.bind(this)}><NavLink to="/course" activeClassName="active" replace>课程</NavLink></li>
                            <li onClick={this.handleClick7.bind(this)}><NavLink to="/community" activeClassName="active" replace>社区</NavLink>
                            {
                                this.state.ulShow7?
                                <ul className={yee.navSec}>
                                    <li><NavLink to="/word/guide">讨论</NavLink></li>
                                    <li><NavLink to="/word/market">小组</NavLink></li>
                                    <li><NavLink to="/word/wordbook">精选</NavLink></li>
                                </ul>
                                :null
                            }
                            </li>
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
    handleClick0(){
        this.setState({
            ulShow0:true,
            ulShow1:false,
            ulShow3:false,
            ulShow5:false,
            ulShow7:false
        })
    }
    handleClick1(){
        this.setState({
            ulShow0:false,
            ulShow1:true,
            ulShow3:false,
            ulShow5:false,
            ulShow7:false
        })
    }
    handleClick2() {
        this.setState({
            ulShow0: false,
            ulShow1: false,
            ulShow3:false,
            ulShow5:false,
            ulShow7:false
        })
    }
    handleClick3() {
        this.setState({
            ulShow0: false,
            ulShow1: false,
            ulShow3:true,
            ulShow5:false,
            ulShow7:false
        })
    }
    handleClick4() {
        this.setState({
            ulShow0: false,
            ulShow1: false,
            ulShow3: false,
            ulShow5:false,
            ulShow7:false
        })
    }
    handleClick5() {
        this.setState({
            ulShow0: false,
            ulShow1: false,
            ulShow3: false,
            ulShow5:true,
            ulShow7:false
        })
    }
    handleClick6() {
        this.setState({
            ulShow0: false,
            ulShow1: false,
            ulShow3: false,
            ulShow5:false,
            ulShow7:false
        })
    }
    handleClick7() {
        this.setState({
            ulShow0: false,
            ulShow1: false,
            ulShow3: false,
            ulShow5:false,
            ulShow7:true
        })
    }
}
// var mapStateToProps=(state)=>({
//     isShow:state.navbarReducer,
//     datalist:state.listbarReducer
// })
export default Navbar

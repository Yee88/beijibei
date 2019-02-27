import React,{Component} from "react"
import login from "./index.module.scss"
import { Icon } from 'antd'

class Register extends Component{
    state={
        
    }
    render(){
        return <div className={`${login.login_container}`}>
        	<div className={`${login.login_bg}`}>
    			<img src="/static/loginbg.png" />
    			<div className={`${login.login_title}`}>坚持打卡</div>
    			<div className={`${login.login_subtitle}`}>享受学习的快乐</div>
    		</div>
        	<div className={`${login.login_wrap}`}>
        		<h3>欢迎来到扇贝</h3>
        		<div className={`${login.login_box}`}>
        			<input type="text" className={`${login.login_input}`} id="phone" name="phone" placeholder="用户名 / 邮箱 / 手机号" />
        			<Icon className={`${login.login_icon}`} type="user" />
        		</div>
        		<div className={`${login.login_box}`}>
        			<input type="password" className={`${login.login_input}`} id="password" name="password" placeholder="密码" />
        			<Icon className={`${login.login_icon}`} type="lock" />
        		</div>
        		<div className={`${login.login_box}`}>
        			<button className={`${login.login_button}`}>注册</button>
        		</div>
        	</div>
        </div>
    }
}
export default Register
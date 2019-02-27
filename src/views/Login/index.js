import React,{Component} from "react"
import login from "./index.module.scss"
import { Icon,Alert } from 'antd'
import "antd/dist/antd.css"
import axios from "axios"
import {setCookie,getCookie} from '../../store/cookie.js'

class Login extends Component{
    constructor(props) {
      super(props);
    
      this.state = {
        phone:'',
        password:'',
        visible: false,
        message:''
      };
    }

    

    render() {
    	
        return <div className={`${login.login_container}`}>
            <div className={`${login.login_alert}`}>
            {
              this.state.visible ? (
                <Alert
                  message={this.state.message}
                  type="error"
                  closable
                  afterClose={this.handleClose}
                />
              ) : null
            }
            </div>
    		<div className={`${login.login_bg}`}>
    			<img src="/static/loginbg.png" />
    			<div className={`${login.login_title}`}>坚持打卡</div>
    			<div className={`${login.login_subtitle}`}>享受学习的快乐</div>
    		</div>
        	<div className={`${login.login_wrap}`}>
        		<h3>欢迎来到扇贝</h3>
        		<div className={`${login.login_box}`}>
        			<input type="text" className={`${login.login_input}`} value={this.state.phone} onChange={(ev)=>{
                        this.setState({
                            phone:ev.target.value
                        })
                    }} id="phone" name="phone" placeholder="用户名 / 邮箱 / 手机号" />
        			<Icon className={`${login.login_icon}`} type="user" />
        		</div>
        		<div className={`${login.login_box}`}>
        			<input type="password" className={`${login.login_input}`} value={this.state.password} onChange={(evt)=>{
                        this.setState({
                            password:evt.target.value
                        })
                    }} id="password" name="password" placeholder="密码" />
        			<Icon className={`${login.login_icon}`} type="lock" />
        		</div>
        		<div className={`${login.login_box}`}>
        			<button className={`${login.login_button}`} onClick={this.send.bind(this)}>登录</button>
        		</div>
        	</div>
        </div>
    }

    componentDidMount() {
    	if(getCookie('phone')){
            this.props.history.push('/word/guide')
        }
    }
    handleClose = () => {
        this.setState({ visible: false });
    }
    send(){
        if(this.state.phone==="" || this.state.password===""){

            this.setState({ visible: true, message:"请输入正确的手机号和密码"});
            // this.setState.message="请输入正确的手机号和密码"
            setTimeout(()=>{
                this.setState({ visible: false });
            },3000)
            return
        }else{
            var reg=/^1[3456789]\d{9}$/;
            if(!reg.test(this.state.phone)) {
               this.setState({ visible: true, message:'手机号不正确' });
                setTimeout(()=>{
                    this.setState({ visible: false });
                },3000)
                return;
            }
            axios({
                url:'/customeruser/customeruserlogin',
                method:"post",
                data:{
                    customerusertel:this.state.phone,
                    customeruserpassword:this.state.password
                }
            }).then(res=>{
                console.log(res)
                if(res.data.ok === 1) {
                    setCookie('phone',this.state.phone,1000*60)
                    this.props.history.push('/word/guide')
                   // this.setState({ visible: true, message:'登陆成功' })
                }
                if(res.data.ok === 0) {
                    this.setState({ visible: true, message:'登陆失败' });
                    setTimeout(()=>{
                        this.setState({ visible: false });
                    },3000)
                    
                }
            })
        }
    }

}
export default Login
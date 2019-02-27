import React,{Component} from "react"
import login from "./index.module.scss"
import { Icon,Alert } from 'antd'
import "antd/dist/antd.css"
import axios from "axios"

class Register extends Component{
    constructor(props) {
      super(props);
    
      this.state = {
        phone:'',
        password:'',
        visible: false,
        message:''
      };
    }
    render(){
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
        			<input type="text" value={this.state.phone} onChange={(ev)=>{
                        this.setState({
                            phone:ev.target.value
                        })
                    }} className={`${login.login_input}`} id="phone" name="phone" placeholder="用户名 / 邮箱 / 手机号" />
        			<Icon className={`${login.login_icon}`} type="user" />
        		</div>
        		<div className={`${login.login_box}`}>
        			<input type="password" value={this.state.password} onChange={(evt)=>{
                        this.setState({
                            password:evt.target.value
                        })
                    }} className={`${login.login_input}`} id="password" name="password" placeholder="密码" />
        			<Icon className={`${login.login_icon}`} type="lock" />
        		</div>
        		<div className={`${login.login_box}`}>
        			<button className={`${login.login_button}`} onClick={this.send.bind(this)}>注册</button>
        		</div>
        	</div>
        </div>
    }
    componentDidMount(){
       // this.send()
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
                url:'/customeruser/customeruseradd',
                method:"post",
                data:{
                    customerusertel:this.state.phone,
                    customeruserpassword:this.state.password
                }
            }).then(res=>{
                console.log(res)
                if(res.data.ok === 1) {
                   this.props.history.push('/login')
                }
            })
        }
    }
}
export default Register
import React,{Component} from "react"
import {Link} from "react-router-dom";
import guideCate from './index.module.scss';
import axios from "axios"

class Guide extends Component{
    state={
        
    }
    render(){
        return <div>
        	<div className={guideCate.guidecateloge}>
        		<div className={guideCate.w}>
	        		<div className={guideCate.header}>
	        			<h2>选择你的学习分类</h2>
	        		</div>
	        		<div className={guideCate.cateloge}>
	        			<ul className={guideCate.catatop}>
	        				<li><Link to="/home">四级</Link></li>
	        				<li><Link to="/home">六级</Link></li>
	        				<li><Link to="/home">考研</Link></li>
	        				<li><Link to="/home">雅思</Link></li>
	        				<li><Link to="/home">托福</Link></li>
	        				<li><Link to="/home">高中</Link></li>
	        			</ul>
	        			<ul className={guideCate.catabottom}>
	        				<li><Link to="/home">小学</Link></li>
	        				<li><Link to="/home">初中</Link></li>
	        				<li><Link to="/home">英专</Link></li>
	        				<li><Link to="/home">托业</Link></li>
	        				<li><Link to="/home">英语辅导</Link></li>
	        				<li><Link to="/home">公共英语</Link></li>
	        				<li><Link to="/home">SAT</Link></li>
	        				<li><Link to="/home">ACT</Link></li>
	        				<li><Link to="/home">BEC</Link></li>
	        				<li><Link to="/home">GRE</Link></li>
	        				<li><Link to="/home">GMAT</Link></li>
	        				<li><Link to="/home">医学</Link></li>
	        				<li><Link to="/home">文学作品</Link></li>
	        				<li><Link to="/home">公共课</Link></li>
	        				<li><Link to="/home">影视剧</Link></li>
	        				<li><Link to="/home">其他</Link></li>
	        			</ul>
	        		</div>
        		</div>
        	</div>
        </div>
    }
    componentDidMount(){
    	axios({
    		url:'/api/v1/guide/category/',
    		headers:{
    			Cookie:'_ga=GA1.2.339604756.1551076247; csrftoken=E2RqnNcWIOP4ZLsizrwG4p9wXCDTgJvA; __utmc=183787513; __utmz=183787513.1551140889.7.4.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjE0OTU4NTk4LCJleHAiOjE1NTIwMDYyOTgsImRldmljZSI6IiIsInVzZXJuYW1lIjoiUGhvbmVfYTRjMDBkZjFmNWRkZjBmYSIsImlzX3N0YWZmIjowfQ.JeX1ajZ-Gj6l9ztfuYt__0Y7QWYrykLkZUL829Eh5qw; locale=zh-cn; userid=214958598; __utma=183787513.339604756.1551076247.1551140889.1551148552.8; userid=214958598'
    		}
    	}).then(res=>{
    		console.log(res.data)
    	})
    }
}
export default Guide
import React,{Component} from "react"
import {Link} from "react-router-dom";
import guideCate from './index.module.scss';
import axios from "axios"
import {connect} from "react-redux"

class Guide extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isShowCate:true
	  };
	}
    render(){
        return <div>
        {
        	this.state.isShowCate?(
        		<div className={guideCate.guidecateloge}>
	        		<div className={guideCate.w}>
		        		<div className={guideCate.header}>
		        			<h2>选择你的学习分类</h2>
		        		</div>
		        		<div className={guideCate.cateloge}>
		        			<ul className={guideCate.catatop}>
		        				{
		        					this.props.cataloge.map(item=>
		        						item.pretest?
		        						<li onClick={this.handleClick.bind(this,item)}><Link to="/home">{item.name}</Link></li>
		        						:null
		        					)
		        				}
		        			</ul>
		        			<ul className={guideCate.catabottom}>
		        				{
		        					this.props.cataloge.map(item=>
		        						!item.pretest?
		        						<li onClick={this.handleClick.bind(this,item.id)}><Link to="/home">{item.name}</Link></li>
		        						:null
		        					)
		        				}
		        				
		        			</ul>
		        		</div>
	        		</div>
	        	</div>
	        	):
	        	this.props.children
        }
        	
        	
        </div>
    }
    componentDidMount(){
    	this.props.getCate()
    }
    handleClick(id){
		//编程式导航
		console.log(this.props);
		this.setState({
			isShowCate:false
		})
		this.props.history.push(`/word/guide/categories/${id}`);
	}
}

var mapStateToProps = (state)=>{
	return{ cataloge:state.guideCataReducer }
}
var mapDispatchTopProps = {
	getCate(){
		return axios({
    		url:'/api/v1/guide/category/'
    	}).then(res=>{
    		return {
    			type:'getCata',
    			payload:res.data.data
    		}
    	})
	}
}
export default connect(mapStateToProps,mapDispatchTopProps)(Guide)
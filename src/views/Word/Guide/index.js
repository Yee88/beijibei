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
		        						<li onClick={this.handleClick.bind(this,item.id,item.name)}><a>{item.name}</a></li>
		        						:null
		        					)
		        				}
		        			</ul>
		        			<ul className={guideCate.catabottom}>
		        				{
		        					this.props.cataloge.map(item=>
		        						!item.pretest?
		        						<li onClick={this.handleClick.bind(this,item.id,item.name)}><a>{item.name}</a></li>
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
    handleClick(id,title){
    	console.log(this)
		this.setState({
			isShowCate:false
		})
		let option ={
			pathname:`/word/guide/categories/${id}`,
			state:{
				title:'/' + title,
				showCate:()=>{
					console.log("12fqfwefq3f")
					this.setState({
						isShowCate:true
					})
				}
			}
		}
		this.props.history.push(option)
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
import React,{Component} from "react"
import {Link} from "react-router-dom";
import axios from "axios"
import guideCateDetail from './index.module.scss';

class GuideCate extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	catedetaillist:[]
	  };
	}
    render(){
        return <div>
            <div className={guideCateDetail.catedetail}>
            	<div className={guideCateDetail.w}>
	            	<div className={guideCateDetail.header}>
	            		<h1>选择单词书<span>/影视剧</span></h1>
	            	</div>
	            	<div className={guideCateDetail.datalist}>
						<ul className={guideCateDetail.detaildata}>
							{
	        					this.state.catedetaillist.map(item=>
	        						<li className={guideCateDetail.detaillist}>
										<dl>
											<dt><img src={item.cover_url}/></dt>
											<dd>
												<h3>{item.title}</h3>
												<p>上传者：{item.owner.username}</p>
												<p>单词数：{item.count}</p>
												<button>开始学习</button>
											</dd>
										</dl>
									</li>
	        					)
	        				}
						</ul>
	            	</div>
	            </div>
            </div>
        </div>
    }
    componentDidMount(){
    	console.log(this.props)
    	 axios({
    		url:`/api/v1/guide/wordbook/${this.props.match.params.id}/`
    	}).then(res=>{
    		console.log(res.data.data)
    		this.setState({
    			catedetaillist:res.data.data
    		})
    	})
    }

}
export default GuideCate
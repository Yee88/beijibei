import React,{Component} from "react"
import axios from "axios"

class GuideCate extends Component{
    render(){
        return <div>
            111
        </div>
    }
    componentDidMount(){
    	console.log(this.props)
    	 axios({
    		url:`/api/v1/guide/wordbook/${this.props.match.params.id}/`
    	}).then(res=>{
    		console.log(res.data.data)
    	})
    }
   
}
export default GuideCate
import React,{Component} from "react"
class Community extends Component{
    state={
        
    }
    render(){
        return <div>
            {
                this.props.children
            }
        </div>
    }
}
export default Community;
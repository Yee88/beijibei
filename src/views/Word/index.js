import React,{Component} from "react"
class Word extends Component{
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
export default Word
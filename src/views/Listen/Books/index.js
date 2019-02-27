import React,{Component} from "react"
import { Modal,Icon,Menu } from 'antd';
import { connect } from "react-redux"
import yee from "./index.module.scss"
import axios from "axios"
class Books extends Component{
    state={
        visible: true,
        summaryShow:true,
        courseShow:false,
        estimateShow:false
    }
    showModal = () => {
        this.setState({
        visible: true,
        });
    }

    hideModal = () => {
        this.setState({
        visible: false,
        });
        this.props.history.push(`/listen/books`)
    }
    handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
    }
    summaryClick(){
        this.setState({
            summaryShow:true,
            courseShow:false,
            estimateShow:false
            })
    }
    courseClick(){
        console.log(this.props.list.articles)
        this.setState({
            summaryShow:false,
            courseShow:true,
            estimateShow:false,
            abc:this.props.list.articles
            })
    }
    estimateClick(){
        this.setState({
            summaryShow:false,
            courseShow:false,
            estimateShow:true
            })
    }
    detailClick(data){
        if(data==0){
            this.props.history.push("/listen/review")
        }
    }

    render(){
        return (
                <div>
                    <Modal 
                    title={<h3>{this.props.list.title}</h3>}
                    width='800px'
                    visible={this.state.visible}
                    onOk={this.hideModal}
                    onCancel={this.hideModal}
                    okText="确认"
                    cancelText="取消"
                    >

                      <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                      >
                        <Menu.Item key="summary" onClick={this.summaryClick.bind(this)}>
                          简介
                        </Menu.Item>
                        <Menu.Item key="course" onClick={this.courseClick.bind(this)}>
                          课程内容
                        </Menu.Item>
                        <Menu.Item key="estimate" onClick={this.estimateClick.bind(this)}>
                          用户评价
                        </Menu.Item>
                     </Menu>
                    { 
                     this.state.summaryShow?
                     <p style={{minHeight:"300px"}}>{this.props.list.introduction}</p>
                     :null        
                    }
                    {
                        this.state.courseShow?
                        this.props.list.articles.map((item,index)=>
                            <p className={"a"+index} style={{minHeight:"30px"}} key={item.id} onClick={this.detailClick.bind(this,index)}>{index+1+'.'+' '}{item.title}</p>
                            )
                        :null
                    }
                    { 
                     this.state.estimateShow?
                     <p style={{minHeight:"300px"}}>b</p>
                     :null        
                    }
                    </Modal>
                </div>
                )
    }
    componentDidMount() {
        //if(JSON.stringify(this.props.list)=='{}'){}
        this.props.getListPromise(this.props.match.params.id); 
    }
}

var mapStateToProps = (state) => ({
    list: state.listReducer
})
var mapDispatchToProps = {
    getListPromise(id) {
        console.log(id)
        return axios({
            url: `/api/v1/listen/book/${id}?_=1551194839674`,
        }).then(res => {
            return {
                type:"addlist",
                payload:res.data.data
            }
            
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books)
import React,{Component} from "react"
import { Modal,Icon,Menu } from 'antd';
import { connect } from "react-redux"
import yee from "./index.module.scss"
import axios from "axios"
import { Spin, Alert } from 'antd';
class Books extends Component{
    state={
        visible: true,
        summaryShow:true,
        courseShow:false,
        estimateShow:false,
        loadShow:true,
        comments:[]
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
    estimateClick(id){
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
                        <Menu.Item key="estimate" onClick={this.estimateClick.bind(this,this.props.match.params.id)}>
                          用户评价
                        </Menu.Item>
                     </Menu>
                    { 
                     this.state.summaryShow?
                     <div style={{minHeight:"300px"}}>
                        {
                            this.state.loadShow?
                                <Spin tip="Loading...">
                                </Spin>
                            :<p>{this.props.list.introduction}</p>
                        }  
                     </div>
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
                     this.state.comments.map(item=>
                            <div className={yee.comments}  style={{minHeight:"30px"}} key={item.id}>
                                <p style={{minHeight:"10px"}}>{item.content}</p>
                                <p className={yee.date} style={{minHeight:"10px"}}><span>{item.user.nickname}</span>{"@"+item.create_date}</p>
                            </div> 
                        )
                     :null        
                    }
                    </Modal>
                    

                        
                   
                </div>
                )
    }
    componentDidMount() {
        this.props.getListPromise(this.props.match.params.id).then(()=>{
            this.setState({
                loadShow:false
                })
            }); 
        axios({
            url: `/api/v1/book/comment/listen/${this.props.match.params.id}/pagination/?page=1&_=1551274715342`,
        }).then(res =>
              //console.log(res.data.data.comments)
              this.state.comments=[...res.data.data.comments]
        )
    }
}

var mapStateToProps = (state) => ({
    list: state.listReducer,
    loadShow:state.loadReducer
})
var mapDispatchToProps = {
    getListPromise(id) {
        console.log(id)
        return axios({
            url: `/api/v1/listen/book/${id}?_=1551194839674`,
        }).then(res => {
            return {
                type:"addlist",
                payload:res.data.data,
            }
            
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books)
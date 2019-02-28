import React,{Component} from "react"
import scss from './index.module.scss'
import { Menu, Icon, Switch } from 'antd';
import { connect } from 'react-redux'
import axios from 'axios'

class Uses extends Component{

    render(){
        return <div className={`${scss.main_body} ${scss.container}`}>
            <div className={`${scss.content}` }>
                <div className={`${scss.l} ${scss.content_left}`}>
                	<div className={`${scss.topic_header}`}>
				        <h2>集思广益</h2>
				    </div>
                    <div className={`${scss.topic}`}>
                    	{this.props.list.map(item=>
	                    	<div className={`${scss.topic_list}`} key={item.topic_post_id}>
	                    		<div className={`${scss.l} ${scss.topic_head}`}>
	                    			<img src={item.author.avatar} />
	                    		</div>
	                    		<div className={`${scss.l} ${scss.topic_content}`}>
	                    			<div className={`${scss.topic_title}`}>
	                    				<h4> <a href="">{item.title}</a></h4>
	                    			</div>
	                    			<div className={`${scss.topic_info}`}>
		                    			<div className={`${scss.l} ${scss.topic_author}`}>
		                    				<a href="">{item.author.nickname}</a> • {item.latest_post_time}
		                    			</div>
		                    			<div className={`${scss.r} ${scss.topic_relies}`}>
		                    				<a href="">
		                    					<span>{item.posts} 回复</span>
		                    				</a>
		                    			</div>
	                    			</div>
	                    		</div>
	                    	</div>
                    	)}
                    </div>
                </div>

                <div className={`${scss.r} ${scss.content_right}`}>
                    <div className={scss.forum_list}>
                        <div className={`${scss.forum_title}`}>
                            <h3>论坛列表</h3>
                        </div>
                        <Menu className={`${scss.forum_menu}`}
                              style={{ 
                                width: 360,
                                fontSize: 24
                              }}
                              defaultSelectedKeys={['1']}
                            >
                          <Menu.Item key="1">
                            <a href="#/community/community">论坛首页</a>
                          </Menu.Item>
                          <Menu.Item key="2">
                            <a href="#/community/uses">集思广益（使用答疑区）</a>
                          </Menu.Item>
                          <Menu.Item key="3">英语学苑（英语学习区）</Menu.Item>
                          <Menu.Item key="4">天南海北（灌水区）</Menu.Item>
                          <Menu.Item key="5">每日翻译</Menu.Item>
                        </Menu>
                    </div>
                    <div className={`${scss.sanb_commend}`}>
                        <div className={`${scss.forum_title}`}>
                            <h3>扇贝推荐</h3>
                        </div>
                        <div className={`${scss.commend_market}`}>
                            <a href=""><h4>智慧词根</h4></a>
                            <p>收录2000条精选词根, 涵盖10000则词条。每个词根包含中英文双语释义。对于...</p>
                        </div>
                        <div className={`${scss.commend_read} `}>
                            <span className={`${scss.l} ${scss.commend_img}`}>
                                <img src="https://static.baydn.com/read/media_store/book/cover/3b7484f830cd1673d390f5c9ec2d6e00.jpg?imageView/1/w/250/h/370/" width="64" />   
                            </span>
                            <span className={`${scss.l} ${scss.commend_content}`}>       
                                <a href=""><h4>哈克贝利·费恩历险记（上）</h4></a>       
                                <p>《哈克贝利·费恩历险记》讲述了哈克遇到逃跑的奴隶吉姆后，与他共同经历的冒险故事。...</p>     
                            </span>
                        </div>
                        <div className={`${scss.commend_words}`}>
                            <span className={`${scss.l} ${scss.commend_img}`}>         
                                <img src="https://static.baydn.com/media/media_store/0fa8670aebb42ca7104449201fbbbb4e.png" width="64" />
                            </span>
                            <span className={`${scss.l} ${scss.commend_content}`}>       
                                <a href=""><h4>扇贝单词</h4></a>       
                                <p>有效的背单词软件...</p>     
                            </span>
                        </div>
                        <div className={`${scss.commend_words}`}>
                            <span className={`${scss.l} ${scss.commend_img}`}>         
                                <img src="https://static.baydn.com/media/media_store/image/fd8a3db0efcbf2520dad2a0e4c309f46.png" width="64" />
                            </span>
                            <span className={`${scss.l} ${scss.commend_content}`}>       
                                <a href=""><h4>扇贝阅读</h4></a>       
                                <p>用英语读懂世界...</p>     
                            </span>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>

        </div>
    }

    componentDidMount() {
        if(this.props.list.length === 0){
            //发ajax
            this.props.getListPromise();
        }
    }

}

var mapStateToProps = (state)=>({
    list:state.usesListReducer
})

var mapDispatchToProps = {
    getListPromise(){
       return axios({
            url:"/api/v1/forum/1/thread/?page=1&_=1551314290422"
        }).then(res=>{
            console.log(res.data.data.threads)
            return {
                type:"addList",
                payload:res.data.data.threads
            }

        })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Uses)
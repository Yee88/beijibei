import React,{Component} from "react"
import scss from './index.module.scss'
import { Menu, Icon, Switch } from 'antd';
import { connect } from 'react-redux'
import axios from 'axios'

class Community extends Component{
    state={
        
    }
    render(){
        return <div className={`${scss.main_body} ${scss.container}`}>
            <div className={`${scss.community_banner}`}>
                <div className={`${scss.l} ${scss.banner_left}`}>
                    <h3 className={`${scss.article_title}`}>
                        <a href="javascript:;">每天只花15分钟，四六级645！Ta是怎么做到的？</a>
                    </h3>
                    <p className={`${scss.article_summary}`}>备考6月四六级的同学们注意了！</p>
                    <a href="" className={`${scss.article_detail}`}>查看详细&gt;&gt;</a>
                </div>
                <div className={`${scss.r} ${scss.banner_right}`}></div>
            </div>
            <div className={`${scss.content}` }>
                <div className={`${scss.l} ${scss.content_left}`}>
                    <div className={`${scss.group}`}>
                        <div className={`${scss.group_title}`}>
                            <h3>最活跃的小组
                                <small className={`${scss.group_extrainfo}`}>根据7天内小组论坛的总发帖数排名</small>
                            </h3>
                        </div>

                        <div className={`${scss.group_team}`}>
                            {
                                this.props.list.map(item=>
                                    <div className={`${scss.group_team_box}`} key={item.id}>
                                        <div className={`${scss.l} ${scss.group_team_head}`}>
                                            <img src={item.emblem_url} />
                                        </div>
                                        <div className={`${scss.l} ${scss.group_team_content}`}>
                                            <h4 className={`${scss.group_team_teamname}`}>
                                                <a href="">{item.name}</a> 
                                                <small>{item.motto}</small>
                                            </h4>
                                            <p className={`${scss.group_team_introduce}`}>{item.description}</p>
                                        </div>
                                        <div className={`${scss.r} ${scss.group_team_info}`}>
                                            成员数 <span className={`${scss.group_team_teaminfo}`}>{item.size}/{item.quota}</span> • 
                                            打卡率 <span className={`${scss.group_team_teaminfo}`}>{item.checkin_rate}</span>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

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
    list:state.communityListReducer
})

var mapDispatchToProps = {
    getListPromise(){
       return axios({
            url:"/api/v1/team/?rank&page=1&ipp=20&_=1551235021318"
        }).then(res=>{
            console.log(res.data.data.teams)
            return {
                type:"addList",
                payload:res.data.data.teams
            }

        })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Community)
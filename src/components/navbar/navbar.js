import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import store from "../../store"
import yee from "./navbar.module.scss"
import { Menu, Dropdown, Icon } from 'antd'
import Cookie from 'js-cookie'
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer">我的空间</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer">我的打卡</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a target="_blank" rel="noopener noreferrer">我的班级</a>
    </Menu.Item>
    <Menu.Item key="3">
      <a target="_blank" rel="noopener noreferrer">我的保险</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" rel="noopener noreferrer">短信</Menu.Item>
    <Menu.Item key="4" rel="noopener noreferrer">贝壳</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="5" rel="noopener noreferrer">设置</Menu.Item>
    <Menu.Item key="6" rel="noopener noreferrer" onClick={()=>{
        Cookie.remove('phone');

    }}><NavLink to="/login" replace>退出</NavLink></Menu.Item>
  </Menu>
);

class Child extends Component{

    state = {
        subnavList:[
            [
                {
                    'name': '听力学习',
                    'src': ''
                },
                // {
                //     'name': '听力课程',
                //     'src': ''
                // },
                // {
                //     'name': '听力计划',
                //     'src': ''
                // }
            ],
            [
                {
                    'name': '单词学习',
                    'src': ''
                },
                // {
                //     'name': '扩展包',
                //     'src': ''
                // },
                // {
                //     'name': '单词书',
                //     'src': ''
                // }
            ],
            [],
            [],
            [],
            [],
            [],
            [
                {
                    'name': '论坛',
                    'src': '/community'
                },
                // {
                //     'name': '小组',
                //     'src': '/community/team'
                // },
                // {
                //     'name': '精选',
                //     'src': '/community/footprints'
                // }
            ]
        ]
    }

    render(){
        return <nav className={yee.subcontainer}>
            <ul className={yee.nav}>
                {
                    this.state.subnavList[`${this.props.parms}`].map((item, index)=>
                    <li><NavLink to={item.src} activeClassName={yee.subnavactive} >{item.name}</NavLink></li>
                    )
                }
            </ul>
        </nav>
    }


    
}

class Navbar extends Component{
    state={
        isShow:store.getState().navbarReducer,
        index: 0,
        navList: [
            {
                'name': '单词',
                'src': '/word'
            },
            {
                'name': '听力',
                'src': '/listen'
            },
            {
                'name': '口语',
                'src': '/spoken'
            },
            {
                'name': '短文',
                'src': '/artical'
            },
            {
                'name': '读书',
                'src': '/reading'
            },
            {
                'name': '炼句',
                'src': '/practice'
            },
            {
                'name': '课程',
                'src': '/course'
            },
            {
                'name': '社区',
                'src': '/community'
            },
        ]
    }
    componentDidMount(){
        store.subscribe(()=>{
            // console.log("message",store.getState())
            this.setState({
                isShow:store.getState().navbarReducer
            })
        })
    }

    wordClick(index) {
        this.setState({
            index: index
        })
    }

    render(){
        return <div>
             {
                this.state.isShow?
                <div className={yee.nafvbar}>
                    <div className={yee.container}>
                        <ul className={yee.nav}>
                            <li><NavLink to="/home"replace><img src="https://static.baydn.com/static/img/logo_v4.png" alt=""/></NavLink></li>
                            <li><NavLink to="/home" replace>首页</NavLink></li>
                            {
                                this.state.navList.map((item, index)=>
                                    <li onClick={this.wordClick.bind(this, index)}><NavLink to={item.src + '/' + index} activeClassName={yee.navactive} replace>{item.name}</NavLink></li>
                                )
                            }
                        </ul>
                        <div className={yee.navright}>
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" href="javascript:;">
                                  {Cookie.get('phone')}
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                    
                    <Child parms={this.state.index} key ></Child>
                </div>

                :null
             }
             
        </div>
    }
}
// var mapStateToProps=(state)=>({
//     isShow:state.navbarReducer,
//     datalist:state.listbarReducer
// })
export default Navbar

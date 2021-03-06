import React,{Component} from "react"
import { Menu } from 'antd';
import yee from "./listen.module.scss"
import {NavLink} from "react-router-dom"
import axios from "axios";
import {connect} from "react-redux"
const SubMenu = Menu.SubMenu;
class Listen extends Component{
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    state={
        openKeys: ['sub1'],
        isShow1:true,
        isShow2:false,
        booksId:[10,13]
    }
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({
                openKeys
            });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    handleClick1(){
        this.setState({
           isShow1:true,
           isShow2:false
        })
    }
    handleClick2(){
        this.setState({
           isShow1:false,
           isShow2:true
        })
    }
    turnClick(id){
        this.props.history.push(`/listen/books/${id}`)
    }
    render(){
        return (
            <div className={yee.listen}>         
                <Menu className={yee.menu}
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    style={{ width: 256 }}
                >
                    <SubMenu key="sub1" title={<span><span>VOA</span></span>}>
                    <Menu.Item key="1" onClick={this.handleClick1.bind(this)}>慢速</Menu.Item>
                    <Menu.Item key="2" onClick={this.handleClick2.bind(this)}>常速</Menu.Item>
                    <Menu.Item key="3">BBC</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><span>出国英语</span></span>}>
                    <Menu.Item key="5">托福</Menu.Item>
                    <Menu.Item key="6">雅思</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><span>普通英语</span></span>}>
                    <Menu.Item key="9">初中英语</Menu.Item>
                    <Menu.Item key="10">高中英语</Menu.Item>
                    <Menu.Item key="11">大学四级</Menu.Item>
                    <Menu.Item key="12">大学六级</Menu.Item>
                    </SubMenu>
                </Menu>
                {
                    this.state.isShow1?
                        <div className={yee.rightCotainer}>
                            <div className={yee.title}>VOA英语</div>
                            <div className={yee.books}>
                            {
                                this.state.booksId.map((item,index)=>
                                    <li key={index} onClick={this.turnClick.bind(this,item)}><img src={`/static/cet${index+3}.png`} alt=""/></li>
                                )
                            }
                            </div>
                        </div>
                    :null
                }
                {
                    this.state.isShow2?
                        <div className={yee.rightCotainer}>
                            <div className={yee.title}>VOA英语</div>
                            <div className={yee.books}>
                            {
                                this.state.booksId.map((item,index)=>
                                    <li key={index} onClick={this.turnClick.bind(this,item)}><img src={`/static/voa${index+2}.png`} alt=""/></li>
                                )
                            }
                            </div>
                        </div>
                    :null
                }
            {this.props.children} 
            </div>
        )
        
    }
     
}
export default Listen
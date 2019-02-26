import React, { Component } from 'react';
import inde from './index.module.scss';
import { connect } from "react-redux"
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
class Home extends Component{
    state={
        
    }
    render() {
    var btnNext={
      outline: 'none',
      right:'70px',
      backgroundImage: 'url(https://static.baydn.com/media/media_store/image/ee0204d6a83d3441b98334b87958524d.png)'
    }
    var btnPrev={
      outline: 'none',
      left: '70px',
      backgroundImage: 'url(https://static.baydn.com/media/media_store/image/a5c71e1fe995e2979058b3e780dd88e9.png)'
    }
    var swiperSlide={
      width: '724px !important'
    }
    var swiperSlideImg={
       maxWidth:'100%'
    }
    return (
      
      <div className="Home">
        <header className={inde.header}>
          <ul className={inde.w}>
            <li><a href="javascript:;">注册</a></li>
            <li><span>|</span></li>
            <li><a href="javascript:;">登录</a></li>
          </ul>
        </header>
        <h1 className={inde.logo}><img src="https://static.baydn.com/static/img/logo_v5.png"/></h1>
        <div className={inde.banner}>
          <div className="swiper-button-next" style={btnNext}></div>
          <div className="swiper-button-prev" style={btnPrev}></div>
          <div className={inde.w}>
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide" style={swiperSlide}><img src="/imgs/banner1.png" style={swiperSlideImg}/></div>
                <div className="swiper-slide" style={swiperSlide}><img src="/imgs/banner2.png" style={swiperSlideImg}/></div>
                <div className="swiper-slide" style={swiperSlide}><img src="/imgs/banner3.png" style={swiperSlideImg}/></div>
                <div className="swiper-slide" style={swiperSlide}><img src="/imgs/banner4.png" style={swiperSlideImg}/></div>
                <div className="swiper-slide" style={swiperSlide}><img src="/imgs/banner5.png" style={swiperSlideImg}/></div>
              </div>

              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <main className={inde.main}>
          <div className={inde.w}>
            <dl>
              <dt className={inde.img1}><img src="https://static.baydn.com/media/media_store/image/b0c8af98ef692f9fac5dca4e82f70bbd.png"/></dt>
              <dd><h4>测单词量</h4></dd>
              <dd>不知道自己的词汇量</dd>
              <dd>还怎么学英语</dd>
              <dd>赶快来试一试</dd>
            </dl>
             <dl>
              <dt className={inde.img2}><img src="https://media-image1.baydn.com/storage_media_image/cassho/fadcef7d936c5463b6fd24ab3dd3a5e6.5967e12cdb8727bc1f15f2b574e04c1b.png"/></dt>
              <dd><h4>大耳狐英语</h4></dd>
              <dd>有趣的动画，纯正的发音</dd>
              <dd>从自然拼读到绘本故事</dd>
              <dd>大耳狐陪伴宝贝学习每一步</dd>
            </dl>
             <dl>
              <dt className={inde.img3}><img src="https://static.baydn.com/media/media_store/image/b4d620b34a074d214f8890577c9ff735.png"/></dt>
              <dd><h4>北极贝社区</h4></dd>
              <dd>学习路上，你不孤单</dd>
              <dd>小组长"骚扰"你，关怀你</dd>
              <dd>就是要让你一起坚持</dd>
            </dl>
          </div>
        </main>
        <footer className={inde.footer}>
          <div className={inde.w}>
            <div className={inde.about}>
              <ul>
                <li><h4>如何使用</h4></li>
                <li><a href="javascript:;">帮助</a></li>
                <li><a href="javascript:;">小组</a></li>
                <li><a href="javascript:;">博客</a></li>
                <li><a href="javascript:;">论坛</a></li>
                <li><a href="javascript:;">你问我答</a></li>
              </ul>
               <ul>
                <li><h4>关于北极贝</h4></li>
                <li><a href="javascript:;">关注我们</a></li>
                <li><a href="javascript:;">加入我们</a></li>
                <li><a href="javascript:;">关于我们</a></li>
              </ul>
               <ul>
                <li><h4>合作伙伴</h4></li>
                <li><img src="https://static.baydn.com/static/img/Collins.jpeg"/></li>
              </ul>
            </div>
            <div className={inde.copyright}>
              <div>
                  Copyright © 2009-2019 版权所有：南京贝湾教育科技有限公司
              </div>
              <div>
                  <a href="http://www.miitbeian.gov.cn/">苏ICP备13045540号-2</a> 公安备案号：32010202010034
              </div>
            </div>


          </div>
        </footer>
      </div>

    );
  }
  componentDidMount(){
    this.props.Hidenavbar()
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }
  componentWillUnmount(){
    this.props.Shownavbar()
  }
}
var mapDispatchToProps={
  Shownavbar(){
      return {
      type:"Shownavbar",
      payload:true
    }
  },
  Hidenavbar(){
    return {
      type:"Hidenavbar",
      payload:false
    }
  } 
}
export default connect(null,mapDispatchToProps)(Home)
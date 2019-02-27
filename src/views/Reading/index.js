import React,{Component} from "react"
import zjm from './index.module.scss';
class Reading extends Component{
    state={

    }
    render(){
      return <div className={Reading}>
          <div className={zjm.Zbanner}></div>
          <div className={zjm.Zdesk}>
              <p className={zjm.ZdeskP}>我的书桌</p>
              <div className={zjm.Zmiddle}>
                <img  className={zjm.ZdeskImg} src="/static/Rbeijing.png" />
                <p className={zjm.ZdeskTip1}>你的书桌上暂时还没有书哦</p>
                <p className={zjm.ZdeskTip2}>快去app或者小程序选一本喜爱的英文书吧～</p>
              </div>
          </div>
          <div className={zjm.Zfooter}>
              <div className={zjm.ZfooterTip1}>扫码下载App，享受更丰富的英文阅读</div>
              <div><img className={zjm.ZfooterImg} src="./static/Rerweima.png"/></div>
              <div className={zjm.ZfooterTip2}>*如果有任何建议和意见，贝贝们可以在APP内点击「我的」-「帮助与反馈」-「反馈」告诉我们哟~</div>
          </div>
      </div>
    }
}
export default Reading;

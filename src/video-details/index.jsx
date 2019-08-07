import React, { Component } from 'react' // 引入react
import './video-details.css' // 引入css
import Videodetailsitem from '../video-details-item' // 引入子模块

class Videodetails extends Component {
  clickbackvideo () { // 事件函数
    this.props.onChange('video')
    console.log('video')
  }
  render () {
    var keyword = this.props.keyword // 传参
    var videodetailsshow
    if (keyword === 'videodetails') { // 判断
      videodetailsshow = ( // 创建结构，向下传参
        <div className='video-details' onClick={this.clickbackvideo.bind(this)}>
          <div className='back-video'>
            <span className='back' />
            <span>  电影 </span>
          </div>
          <Videodetailsitem videoid={this.props.videoid} videos={this.props.videos} />
        </div>

      )
    }
    return ( // 插入结构
      <div className='video-details'>
        {videodetailsshow}
      </div>
    )
  }
}
export default Videodetails // 输出模块

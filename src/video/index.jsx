import React, { Component } from 'react' // 引入react
import './video.css' // 引入css
import Videoitem from '../video-item' // 引入子模块

class Video extends Component {
  render () {
    var keyword = this.props.keyword // 传参
    var videoshow
    if (keyword === 'video') { // 判断
      videoshow = ( // 创建结构
        <div className='video-list'>
          <Videoitem pop={this.props.onChange} onChangevideoid={this.props.onChangevideoid} videos={this.props.videos} onChangevideos={this.props.onChangevideos} searchvideo={this.props.searchvideo} />
        </div>

      )
    }
    return ( // 插入结构
      <div id='video'>
        {videoshow}
      </div>
    )
  }
}
export default Video // 输出模块

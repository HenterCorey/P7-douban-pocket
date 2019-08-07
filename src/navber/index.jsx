import React, { Component } from 'react' // 引入react
import './navber.css' // 引入css
import bookimg from '../images/book.png'
import musicimg from '../images/music.png'
import videoimg from '../images/video.png'

class Navber extends Component {
  // 三个点击事件函数
  clickbook () {
    this.props.onChange('book')
    console.log('book')
  }
  clickvideo () {
    this.props.onChange('video')
    console.log('video')
  }
  clickmusic () {
    this.props.onChange('music')
    console.log('music')
  }
  render () {
    var keyword = this.props.keyword // 传参
    var navbershow
    if (keyword === 'music' || keyword === 'video' || keyword === 'book') { // 判断
      navbershow = ( // 结构
        <div className='navber-container'>
          <div className='book' onClick={this.clickbook.bind(this)}>
            <img src={bookimg} alt='图书' />
            <span>图书</span>
          </div>
          <div className='video' onClick={this.clickvideo.bind(this)}>
            <img src={videoimg} alt='电影' />
            <span>电影</span>
          </div>
          <div className='music' onClick={this.clickmusic.bind(this)}>
            <img src={musicimg} alt='音乐' />
            <span>音乐</span>
          </div>
        </div>
      )
    }
    return ( // 插入结构
      <div>
        {navbershow}
      </div>
    )
  }
}
export default Navber // 输出模块

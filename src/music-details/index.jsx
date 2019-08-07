import React, { Component } from 'react' // 引入react
import './music-details.css' // 引入css
import Musicdetailsitem from '../music-details-item' // 引入子模块
class Musicdetails extends Component {
  clickbackmusic () { // 点击函数
    this.props.onChange('music') // 传参调用函数
    console.log('music')
  }
  render () {
    var keyword = this.props.keyword // 传参
    var musicdetailsshow // 创建对象
    if (keyword === 'musicdetails') { // 判断
      musicdetailsshow = ( // 创建结构，向下传参
        <div className='music-details' onClick={this.clickbackmusic.bind(this)}>
          <div className='back-music'>
            <span className='back' />
            <span>  音乐 </span>
          </div>
          <Musicdetailsitem musicid={this.props.musicid} musics={this.props.musics} />
        </div>

      )
    }
    return ( // 插入结构
      <div className='music-details'>
        {musicdetailsshow}
      </div>
    )
  }
}
export default Musicdetails // 输出模块

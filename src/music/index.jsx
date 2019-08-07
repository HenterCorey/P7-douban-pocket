import React, { Component } from 'react' // 引入react
import './music.css' // 引入css
import Musicitem from '../music-item' // 引入子模块
class Music extends Component {
  render () {
    var keyword = this.props.keyword // 传参keyword
    var musicshow // 创建对象
    if (keyword === 'music') { // 判断
      musicshow = ( // 创建结构，向下传参
        <div className='music-list'>
          <Musicitem pop={this.props.onChange} onChangemusicid={this.props.onChangemusicid} musics={this.props.musics} onChangemusics={this.props.onChangemusics} searchmusic={this.props.searchmusic} />
        </div>
      )
    }
    return ( // 插入结构
      <div id='music'>
        {musicshow}
      </div>
    )
  }
}
export default Music // 输出模块

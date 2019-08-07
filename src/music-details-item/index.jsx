import React, { Component } from 'react' // 引入recat
import './music-details-item.css' // 引入css

class Musicdetailsitem extends Component {
  render () {
    var musicid = this.props.musicid // 传参获取musicid
    var musics = this.props.musics // 传参获取musics
    var music // 创建展示歌曲
    for (var i = 0; i < musics.length; i++) { // 遍历musics获取书籍
      if (musics[i].id === musicid) {
        music = musics[i]
        break
      }
    }
    var musicdetailsshow = ( // 创建结构
      <div className='music-details-item'>
        <div className='music-details-head'>
          <div />
          <span className='music-details-title'>{music.title}</span>
        </div>
        <div className='music-details-foot'>
          <div className='music-details-information'>
            <div className='music-details-information-left'>
              <img src={music.image} alt={music.title} />
            </div>
            <div className='music-details-information-right'>
              <p>名称：{music.title}</p>
              <div className='music-tags'>
                {music.tags.map((item, index) => {
                  return <span className='music-tag' key={index}>{item.name}</span>
                })}
              </div>
              <p>作者：
                {music.author.map((item, index) => {
                  return <span key={index}>{item.name}</span>
                })}
              </p>
              <p>发行商：{music.attrs.publisher}</p>
              <p>发行时间：{music.attrs.pubdate}</p>
              <p>评分：{music.rating.average}</p>
            </div>
          </div>
          <div className='music-details-introduce'>
            <h3 className='music-details-Preface'>简介</h3>
            <p />
            <h3 className='music-details-author'>内容</h3>
            <p>{music.title}</p>
          </div>
        </div>
      </div>
    )
    return ( // 插入结构
      <div>
        {musicdetailsshow}
      </div>
    )
  }
}
export default Musicdetailsitem // 输出模块

import React, { Component } from 'react' // 引入react
import './video-details-item.css' // 引入css

class Videodetailsitem extends Component {
  render () {
    var videoid = this.props.videoid // 传参
    var videos = this.props.videos // 传参
    var video
    for (var i = 0; i < videos.length; i++) { // 遍历赋值
      if (videos[i].id === videoid) {
        video = videos[i]
        break
      }
    }
    var videodetailsshow = ( // 创建结构
      <div className='video-details-item'>
        <div className='video-details-head'>
          <span className='video-details-title'>{video.title}</span>
        </div>
        <div className='video-details-foot'>
          <img src={video.images.large} alt={video.title} />
          <div className='video-details-information'>
            <h3>简介</h3>
            <p>名称：{video.title}
              <span />
              {video.genres.map((item, index) => {
                return <span className='video-tag' key={index}>{item}</span>
              })}
            </p>
            <p>上映时间：{video.year}</p>
            <p>导演：
              {video.directors.map((item, index) => {
                return <span className='director' key={index}>{item.name}</span>
              })}
            </p>
            <p>{video.original_title}</p>
          </div>
          <div className='video-details-casts'>
            <h3>演员</h3>
            <div className='video-details-cast'>
              {video.casts.map((item, index) => {
                return <a href={item.alt} key={index}>
                  <img src={item.avatars.medium} alt={item.name} />
                  <span>{item.name}</span>
                </a>
              })}
            </div>
          </div>
        </div>
      </div>
    )
    return ( // 插入结构
      <div>
        {videodetailsshow}
      </div>
    )
  }
}
export default Videodetailsitem // 输出模块

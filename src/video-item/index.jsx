import React, { Component } from 'react' // 引入react
import fetchJsonp from 'fetch-jsonp' // 引入跨域模块
import './video-item.css' // 引入css

class Videoitem extends Component {
  getData (url) { // 跨域函数
    fetchJsonp(url)
      .then(function (response) {
        return response.json()
      }).then((json) => {
        this.props.onChangevideos(json.result) // 跨域获取数据并赋值
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
  }
  clickvideoitem (e) { // 点击事件函数
    var videoid
    videoid = e.target.getAttribute('data-id') // 获取自定义属性
    console.log(videoid)
    this.props.onChangevideoid(videoid) // 传参调用函数
    this.props.pop('videodetails') // 传参调用函数
    console.log('videodetails')
  }
  render () {
    const videos = this.props.videos // 传参
    var videoitemshow
    if (videos.length === 0) {
    } else {
      videoitemshow = ( // 创建结构
        <div className='videos'>
          {videos.map((item, index) => {
            const tags = []
            const names = []
            for (var i = 0; i < item.genres.length; i++) {
              tags.push(item.genres[i])
            }
            for (var i = 0; i < item.casts.length; i++) {
              names.push(item.casts[i].name)
            }
            return <div className='video-item' key={index} onClick={this.clickvideoitem.bind(this)} data-id={item.id}>
              <div className='video-item-left' onClick={this.clickvideoitem.bind(this)} data-id={item.id}>
                <img className='video-image' src={item.images.large} alt={item.title} onClick={this.clickvideoitem.bind(this)} data-id={item.id} />
              </div>
              <div className='video-item-rigth' onClick={this.clickvideoitem.bind(this)} data-id={item.id}>
                <p className='video-title' onClick={this.clickvideoitem.bind(this)} data-id={item.id}>{item.title}</p>
                <div className='video-tags' onClick={this.clickvideoitem.bind(this)} data-id={item.id}>
                  {tags.map((item, index) => {
                    return <span className='video-tag' key={index}>{item}</span>
                  })}
                </div>
                <div className='video-names' onClick={this.clickvideoitem.bind(this)} data-id={item.id}>
                  {names.map((item, index) => {
                    return <span className='video-name' key={index}>{item} </span>
                  })}
                </div>
                <p className='video-average' onClick={this.clickvideoitem.bind(this)} data-id={item.id}>评分: {item.rating.average}</p>
              </div>
            </div>
          })}
        </div>
      )
    }
    return ( // 插入结构
      <div>
        {videoitemshow}
      </div>
    )
  }
  componentWillMount () {
    var searchvideo = this.props.searchvideo // 传参
    var videoname = encodeURI(searchvideo) // 编码
    // 拼接完整url
    var url = 'http://sas.qq.com/cgi-bin/db/data?t=%5B%22ke_coding_movie%22%5D&q=%7Bke_coding_movie(_page:1,_limit:10,title:%22%25' + videoname + '%25%22)%7Bid,title,rating%7Bmax,average,stars,min,details%7Bscore_1,score_2,score_3,score_4,score_5%7D%7D,genres,casts%7Balt,avatars%7Bsmall,large,medium%7D,name,name_en,id%7D,durations,mainland_pubdate,pubdates,has_video,collect_count,original_title,subtype,directors%7Balt,avatars%7Bsmall,large,medium%7D,name,id%7D,year,images%7Bsmall,large,medium%7D,alt%7D%7D'
    this.getData(url)
  }
}
export default Videoitem // 输出模块

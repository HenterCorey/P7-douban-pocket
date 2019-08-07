import React, { Component } from 'react' // 引入react
import fetchJsonp from 'fetch-jsonp' // 引入跨域
import './music-item.css' // 引入css

class Musicitem extends Component {
  getData (url) { // 跨域函数
    fetchJsonp(url)
      .then(function (response) {
        return response.json()
      }).then((json) => {
        this.props.onChangemusics(json.result) // 传参，调用，赋值
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
  }
  clickmusicitem (e) { // 点击函数
    var musicid
    musicid = e.target.getAttribute('data-id') // 获取自定义属性id
    console.log(musicid)
    this.props.onChangemusicid(musicid) // 传参调用函数
    this.props.pop('musicdetails') // 传参调用函数
    console.log('musicdetails')
  }
  render () {
    const musics = this.props.musics // 传参
    var musicitemshow
    if (musics.length === 0) {
    } else {
      musicitemshow = ( // 创建结构
        <div className='musics'>
          {musics.map((item, index) => { // 遍历
            const name = []
            for (var i = 0; i < item.author.length; i++) {
              name.push(item.author[i].name)
            }
            return <div className='music-item' key={index} onClick={this.clickmusicitem.bind(this)} data-id={item.id}>
              <div className='music-item-left' onClick={this.clickmusicitem.bind(this)} data-id={item.id}>
                <img className='music-image' src={item.image} alt={item.title} onClick={this.clickmusicitem.bind(this)} data-id={item.id} />
              </div>
              <div className='music-item-rigth' onClick={this.clickmusicitem.bind(this)} data-id={item.id}>
                <p onClick={this.clickmusicitem.bind(this)} data-id={item.id}>名称: {item.title}</p>
                <div className='music-names'onClick={this.clickmusicitem.bind(this)} data-id={item.id}>
                                作者：
                  {name.map((item, index) => {
                    return <span className='music-name' key={index} >{item} </span>
                  })}
                </div>
                <p onClick={this.clickmusicitem.bind(this)} data-id={item.id}>评分: {item.rating.average}</p>
              </div>
            </div>
          })}
        </div>
      )
    }
    return ( // 插入结构
      <div>
        {musicitemshow}
      </div>
    )
  }
  componentWillMount () {
    var searchmusic = this.props.searchmusic // 传参
    var musicname = encodeURI(searchmusic) // 编码
    // 拼接完整url
    var url = 'http://sas.qq.com/cgi-bin/db/data?t=%5B%22ke_coding_music%22%5D&q=%7Bke_coding_music(_page:1,_limit:10,title:%22%25' + musicname + '%25%22)%7Bid,title,alt,rating%7Bmax,average,numRaters,min%7D,author%7Bname%7D,alt_title,image,tags%7Bcount,name%7D,mobile_link,attrs%7Bpublisher,singer,version,pubdate,title,media,tracks,discs%7D%7D%7D'
    this.getData(url)
  }
}
export default Musicitem // 输出结构

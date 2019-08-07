import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import fetchJsonp from 'fetch-jsonp' // 引入fetchJsonp进行跨域
// import App from './app';
// 引入子模块
import Input from './input'
import Navber from './navber'
import Book from './book'
import Video from './video'
import Music from './music'
import Bookdetail from './book-details'
import Videodetails from './video-details'
import Musicdetails from './music-details'

class App extends Component {
  constructor () {
    super()
    this.state = { // 创建关键参数
      keyword: 'book', // 默认book，用来控制界面的切换
      bookid: '', // 获取点击的元素id
      videoid: '', // 获取点击的元素id
      musicid: '', // 获取点击的元素id
      books: [], // 书籍列表
      videos: [], // 电影列表
      musics: [], // 音乐列表
      searchbook: '', // 搜索词
      searchvideo: '', // 搜索词
      searchmusic: '' // 搜索词
    }
  }
  // 跨域访问数据更改列表
  getData (url, url2, url3) { // 跨域访问函数
    fetchJsonp(url)
      .then(function (response) {
        return response.json()
      }).then((json) => {
        this.setState({
          books: json.result // 更新books数据
        })
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
    fetchJsonp(url2)
      .then(function (response) {
        return response.json()
      }).then((json) => {
        this.setState({
          videos: json.result // 更新video数据
        })
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
    fetchJsonp(url3)
      .then(function (response) {
        return response.json()
      }).then((json) => {
        this.setState({
          musics: json.result // 更新music数据
        })
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
  }
  // 更改关键参数的相关函数
  onChangesearchbook (value) {
    this.setState({
      searchbook: value
    })
  }
  onChangesearchvideo (value) {
    this.setState({
      searchvideo: value
    })
  }
  onChangesearchmusic (value) {
    this.setState({
      searchmusic: value
    })
  }
  onChange (value) {
    this.setState({
      keyword: value
    })
  }
  onChangebookid (value) {
    this.setState({
      bookid: value
    })
  }
  onChangevideoid (value) {
    this.setState({
      videoid: value
    })
  }
  onChangemusicid (value) {
    this.setState({
      musicid: value
    })
  }
  onChangebooks (value) {
    this.setState({
      books: value
    })
  }
  onChangemusics (value) {
    this.setState({
      musics: value
    })
  }
  onChangevideos (value) {
    this.setState({
      videos: value
    })
  }
  render () {
    // 参数赋值
    var keyword = this.state.keyword
    var bookid = this.state.bookid
    var musicid = this.state.musicid
    var videoid = this.state.videoid
    var books = this.state.books
    var musics = this.state.musics
    var videos = this.state.videos
    var searchbook = this.state.searchbook
    var searchvideo = this.state.searchvideo
    var searchmusic = this.state.searchmusic
    return ( // 插入子模块并向下传参
      <div className='app'>
        <Input keyword={keyword} onChangesearchbook={this.onChangesearchbook.bind(this)} onChangesearchvideo={this.onChangesearchvideo.bind(this)} onChangesearchmusic={this.onChangesearchmusic.bind(this)} getData={this.getData.bind(this)} />
        <Book keyword={keyword} onChange={this.onChange.bind(this)} onChangebookid={this.onChangebookid.bind(this)} books={books} onChangebooks={this.onChangebooks.bind(this)} searchbook={searchbook} />
        <Video keyword={keyword} onChange={this.onChange.bind(this)} onChangevideoid={this.onChangevideoid.bind(this)} searchvideo={searchvideo} videos={videos} onChangevideos={this.onChangevideos.bind(this)} />
        <Music keyword={keyword} onChange={this.onChange.bind(this)} onChangemusicid={this.onChangemusicid.bind(this)} searchmusic={searchmusic} musics={musics} onChangemusics={this.onChangemusics.bind(this)} />
        <Bookdetail onChange={this.onChange.bind(this)} keyword={keyword} bookid={bookid} books={books} />
        <Videodetails onChange={this.onChange.bind(this)} keyword={keyword} videoid={videoid} videos={videos} />
        <Musicdetails onChange={this.onChange.bind(this)} keyword={keyword} musicid={musicid} musics={musics} />
        <Navber keyword={keyword} onChange={this.onChange.bind(this)} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

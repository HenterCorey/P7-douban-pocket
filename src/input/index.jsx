import React, { Component } from 'react' // 引入react
import './input.css' // 引入css
class Input extends Component {
  clickbutton (e) { // 点击都锁按调用函数
    var input = document.getElementById('input') // 获取input输入框
    var value = input.value // 获取输入框内容
    if (value !== '') { // 若输入值不为空
      // 调用传参改变搜索值
      this.props.onChangesearchbook(value)
      this.props.onChangesearchvideo(value)
      this.props.onChangesearchmusic(value)
      var name = encodeURI(value) // 对搜索词url编码并赋值给bookname
      // 拼接完整的url
      var bookurl = 'http://sas.qq.com/cgi-bin/db/data?t=%5B%22ke_coding_book%22%5D&q=%7Bke_coding_book(_page:1,_limit:10,title:%22' + name + '%25%22)%7Bid,title,rating%7Bmax,numRaters,average,min%7D,subtitle,author,pubdate,tags%7Bcount,name,title%7D,origin_title,image,binding,translator,catalog,pages,images%7Bsmall,large,medium%7D,alt,publisher,isbn10,isbn13,url,alt_title,author_intro,summary,price,ebook_price,ebook_url,series%7Bid,title%7D%7D%7D'
      var videourl = 'http://sas.qq.com/cgi-bin/db/data?t=%5B%22ke_coding_movie%22%5D&q=%7Bke_coding_movie(_page:1,_limit:10,title:%22%25' + name + '%25%22)%7Bid,title,rating%7Bmax,average,stars,min,details%7Bscore_1,score_2,score_3,score_4,score_5%7D%7D,genres,casts%7Balt,avatars%7Bsmall,large,medium%7D,name,name_en,id%7D,durations,mainland_pubdate,pubdates,has_video,collect_count,original_title,subtype,directors%7Balt,avatars%7Bsmall,large,medium%7D,name,id%7D,year,images%7Bsmall,large,medium%7D,alt%7D%7D'
      var musicurl = 'http://sas.qq.com/cgi-bin/db/data?t=%5B%22ke_coding_music%22%5D&q=%7Bke_coding_music(_page:1,_limit:10,title:%22%25' + name + '%25%22)%7Bid,title,alt,rating%7Bmax,average,numRaters,min%7D,author%7Bname%7D,alt_title,image,tags%7Bcount,name%7D,mobile_link,attrs%7Bpublisher,singer,version,pubdate,title,media,tracks,discs%7D%7D%7D'
      this.props.getData(bookurl, videourl, musicurl) // 跨域访问
      input.value = '' // 重置输入框
    }
    console.log(value)
    //        console.log(book,video,music);
  }
  render () {
    var keyword = this.props.keyword // 传参获 取keyword
    var inputshow // 创建对象
    if (keyword === 'music' || keyword === 'video' || keyword === 'book') { // 触发显示条件
      inputshow = ( // 创建结构赋值
        <div className='input-container'>
          <input type='search' id='input' placeholder='书名、作者、ISBN' />
          <button type='button' onClick={this.clickbutton.bind(this)}>搜索</button>
        </div>
      )
    }
    return ( // 插入结构
      <div>
        {inputshow}
      </div>
    )
  }
}
export default Input // 输出模块

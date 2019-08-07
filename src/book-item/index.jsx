import React, { Component } from 'react' // 引入react
import fetchJsonp from 'fetch-jsonp' // 引入fetchJsonp进行跨域
import './book-item.css' // 引入CSS

class Bookitem extends Component {
  getData (url) { // 跨域访问函数
    fetchJsonp(url)
      .then(function (response) {
        return response.json()
      }).then((json) => {
        this.props.onChangebooks(json.result) // json为返回值，调用传参的onChangebooks函数将result内容赋值给books
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
  }
  clickbookitem (e) { // 点击书记列表触发此函数
    var bookid
    bookid = e.target.getAttribute('data-id') // 获取元素的自定义属性值
    this.props.onChangebookid(bookid) // 执行传参onChangebookid函数改变bookid
    this.props.pop('bookdetails') // 执行传函函数修改keyword属性值
    console.log('bookdetails')
  }
  componentWillMount () {
    var searchbook = this.props.searchbook // 引入传参searchbook搜索关键词
    var bookname = encodeURI(searchbook) // 对搜索词url编码并赋值给bookname
    // 拼接完整的url
    var url = 'http://sas.qq.com/cgi-bin/db/data?t=%5B%22ke_coding_book%22%5D&q=%7Bke_coding_book(_page:1,_limit:10,title:%22' + bookname + '%25%22)%7Bid,title,rating%7Bmax,numRaters,average,min%7D,subtitle,author,pubdate,tags%7Bcount,name,title%7D,origin_title,image,binding,translator,catalog,pages,images%7Bsmall,large,medium%7D,alt,publisher,isbn10,isbn13,url,alt_title,author_intro,summary,price,ebook_price,ebook_url,series%7Bid,title%7D%7D%7D'
    this.getData(url) // 跨域访问
  }

  render () {
    const books = this.props.books // 获取传参的books
    var bookitemshow // 船舰对象用于接受结构体
    if (books.length === 0) {
    } else {
      bookitemshow = ( // 结构体赋值
        <div className='books'>
          {books.map((item, index) => { // 遍历books输出结构
            const tags = []
            for (var i = 0; i < item.tags.length; i++) {
              tags.push(item.tags[i].title)
            }
            return <div className='book-item' key={index} data-id={item.id} onClick={this.clickbookitem.bind(this)}>
              <div className='book-item-left' data-id={item.id} onClick={this.clickbookitem.bind(this)}>
                <img className='book-image' src={item.image} alt={item.title} data-id={item.id} onClick={this.clickbookitem.bind(this)} />
              </div>
              <div className='book-item-rigth' data-id={item.id} onClick={this.clickbookitem.bind(this)}>
                <p data-id={item.id} onClick={this.clickbookitem.bind(this)}>名称: {item.title}</p>
                <div className='tags'>
                  {tags.map((item, index) => {
                    return <span className='tag' data-id={item.id} onClick={this.clickbookitem.bind(this)} key={index}>{item}</span>
                  })}
                </div>
                <p data-id={item.id} onClick={this.clickbookitem.bind(this)}>作者: {item.author}</p>
                <p data-id={item.id} onClick={this.clickbookitem.bind(this)}>评分: {item.rating.average}</p>
                <p data-id={item.id} onClick={this.clickbookitem.bind(this)}>时间: {item.pubdate}</p>
              </div>
            </div>
          })}
        </div>
      )
    }
    return ( // 输出结构
      <div>
        {bookitemshow}
      </div>
    )
  }
}
export default Bookitem // 输出模块

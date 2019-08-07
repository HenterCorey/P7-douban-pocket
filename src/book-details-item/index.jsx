import React, { Component } from 'react' // 引入react
import './book-details-item.css' // 引入CSS

class Bookdetailsitem extends Component {
  render () {
    var bookid = this.props.bookid // 引入传参bookid要显示详情的书籍id
    var books = this.props.books // 引入传参books书籍列表
    var book // 创建对象用于承载结构体
    for (var i = 0; i < books.length; i++) { // 遍历书籍列表寻找到书籍并赋值给book
      if (books[i].id === bookid) {
        book = books[i]
        break
      }
    }
    var bookdetailsshow = ( // 创建要显示的书籍结构
      <div className='book-details-item'>
        <div className='book-details-head'>
          <div />
          <span className='book-details-title'>{book.title}</span>
        </div>
        <div className='book-details-foot'>
          <div className='book-details-information'>
            <div className='book-details-information-left'>
              <img src={book.image} alt={book.title} />
            </div>
            <div className='book-details-information-right'>
              <p>名称：{book.title}</p>
              <p>作者：
                {book.author.map((item, index) => {
                  return <span key={index}>{item}</span>
                })}
              </p>
              <p>出版社：{book.publisher}</p>
              <p>日期：{book.pubdate}</p>
              <p>评分：{book.rating.average}</p>
              <p>价钱：￥{book.price}</p>
              <div className='tags'>
                {book.tags.map((item, index) => {
                  return <span className='tag' key={index}>{item.title}</span>
                })}
              </div>
            </div>
          </div>
          <div className='book-details-introduce'>
            <h3 className='book-details-Preface'>序言</h3>
            <p>{book.summary}</p>
            <h3 className='book-details-author'>简介</h3>
            <p>{book.author_intro}</p>
          </div>
        </div>
      </div>
    )
    return ( // 输出结构
      <div>
        {bookdetailsshow}
      </div>

    )
  }
}
export default Bookdetailsitem // 输出模块

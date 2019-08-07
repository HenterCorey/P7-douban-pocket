import React, { Component } from 'react' // 引入react
import './book.css' // 引入CSS文件
import Bookitem from '../book-item' // 引入item列表模块
class Book extends Component {
  render () {
    var keyword = this.props.keyword // 接受传参
    var bookshow // 创建对象
    if (keyword === 'book') { // 根据参数控制是否输出结构
      bookshow = ( // 结构体同时通过结构体向子组件bookitem进行参数传递
        <div className='book-list' id='book'>
          <Bookitem pop={this.props.onChange} onChangebookid={this.props.onChangebookid} books={this.props.books} onChangebooks={this.props.onChangebooks} searchbook={this.props.searchbook} />
        </div>
      )
    }
    return ( // 引入结构体，使得当参数keyword为book时，book列表才加载，否则book列表无结构输入，自然无显示内容
      <div>
        {bookshow}
      </div>
    )
  }
}
export default Book // 输出book模块

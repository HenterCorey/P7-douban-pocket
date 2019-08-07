import React, { Component } from 'react' // 引入react
import './book-details.css' // 引入CSS
import Bookdetailsitem from '../book-details-item' // 引入书籍详情页
class Bookdetails extends Component {
  clickbackbook () { // 创建一个事件函数以备调用
    this.props.onChange('book') // 调用父组件的参数onChange函数用以改变keyword的值
    console.log('book')
  }
  render () {
    var keyword = this.props.keyword // 调用传参并赋值
    var bookdetailsshow // 创建对象用于接收结构体
    if (keyword === 'bookdetails') { // 若keyword属性为bookdetails则执行下面内容
      bookdetailsshow = ( // 创建结构体并赋值给bookdetailsshow，并将参数传递给子模块
        <div className='book-details' >
          <div className='back-book' onClick={this.clickbackbook.bind(this)}>
            <span className='back' />
            <span>  图书 </span>
          </div>
          <Bookdetailsitem bookid={this.props.bookid} books={this.props.books} />
        </div>

      )
    }
    return ( // 引入结构体，使得当参数keyword为bookdetails时列表才加载，否则列表bookdetails无结构输入，自然无显示内容
      <div>
        {bookdetailsshow}
      </div>
    )
  }
}
export default Bookdetails // 输出模块

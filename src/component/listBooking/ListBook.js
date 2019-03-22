import React ,{Component} from 'react'
import { connect } from 'react-redux';
import {BookList} from '../book/booklist'
import "./listBooking.scss"
 class ListBook extends Component {

 render() {

    return <div > 
      <section id="bookListing">
        <h1 className="page-title">All Books</h1>
        <BookList books={this.props.books.data} />
      </section>
       
      </div>
        
}
}
function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(ListBook)
import React ,{Component} from 'react'
import {Alert,Button,Jumbotron,Modal} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from 'actions';
import {BookList} from '../component/book/booklist'
 class ListBook extends Component {

 render() {

    return <div > 
      <section id="rentalListing">
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
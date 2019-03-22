import React ,{Component} from 'react'
import { connect } from 'react-redux';
import * as actions from 'actions';
import {BookList} from '../book/booklist'



class BookSearchListing extends Component {

    constructor(props) {
        super(props);
        this.searchRentalsByBook(props)  
      }

    searchRentalsByBook=()=> {
        const searchedBook = this.props.match.params.book;
        this.setState({searchedBook});
        this.props.dispatch(actions.fetchBooks(searchedBook,this.props.books.data));
      } 
 
   render() {
  
  return <div > 
      <section id="rentalListing">
        <h1 className="page-title">All Searched Books</h1>
        <BookList books={this.props.books.search} />
      </section>
       
      </div>
        
  }
}
function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookSearchListing)
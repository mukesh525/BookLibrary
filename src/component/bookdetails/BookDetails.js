import React ,{Component} from 'react';
import {Container,Media} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from 'actions';
class BookDetails extends Component {

  componentWillMount() {
    // Dispatch action
    const bookId = this.props.match.params.id;
    this.props.dispatch(actions.fetchBooksById(bookId,this.props.books.data));
  }



    render() {
    const book =this.props.books.book;
    return (
        <Container>
          <Media>
          <img
            width={164}
            height={164}
            className="mr-3"
            src={book.image}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h2>{book.name}</h2>
            <p>
              {book.description}
            </p>
          </Media.Body>
        </Media>
        </Container>
    );
        
}
}
function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookDetails)
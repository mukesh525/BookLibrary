import React from 'react';
import { BookCard } from './book';

export class BookList extends React.Component {

  renderBooks() {
    return this.props.books.map((book, index) => {
      return (
          <BookCard key={index}
                      colNum='col-md-4 col-xs-6 mb-4'
                      book={book}/>
        )
    });
  }
  render() {
    return (
      <div className="row">
        {this.renderBooks()}
      </div>
    )
  }
}
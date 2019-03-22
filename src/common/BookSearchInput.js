import React from 'react';
import { withRouter } from 'react-router-dom';

class BookSearchInput extends React.Component {

  constructor() {
    super();

    this.searchInput = React.createRef();
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }

  handleSearch() {
    const { history } = this.props;
    const book = this.searchInput.current.value;
    book ? history.push(`/books/${book}/listbook`) : history.push('/listbook');
  }


  render() {
    return (
      <div className='form-inline my-2 my-lg-0'>
        <input onKeyPress={(event) => { this.handleKeyPress(event)}}
               ref={this.searchInput}
               className='form-control mr-sm-2 bwm-search'
               type='search'
               placeholder='Try "Anna Karenina"'
               aria-label='Search'></input>
        <button onClick={() => {this.handleSearch()}}
                className='btn btn-outline-success my-2 my-sm-0 btn-bwm-search'
                type='submit'>Search</button>
      </div>
    )
  }
}


export default withRouter(BookSearchInput)

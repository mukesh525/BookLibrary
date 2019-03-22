import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import './header.scss';

import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BookSearchInput from './BookSearchInput'
class Header extends React.Component {




  render() {
     return  ( 
        <Navbar className="header" sticky={'top'} variant="dark">
        <Navbar.Brand href="#home">Book Libarary</Navbar.Brand>
        <Nav className="mr-auto">
        <Link to="/AddBook">
           <Nav.Link href="/" activeClassName="active">Add Book</Nav.Link>
        </Link>
        <Link to="/listbook">
          <Nav.Link href="/listbook">List Books</Nav.Link>
        </Link>
         
        </Nav>
         {this.props.location.pathname ==="/listbook" &&
          <BookSearchInput/>
        }
      </Navbar>
      )
    }
  }

  function mapStateToProps(state) {
    return {
      books: state.books
    }
  }
  
  export default withRouter(connect(mapStateToProps)(Header));
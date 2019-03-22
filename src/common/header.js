import React from 'react';
import {Navbar,Nav,FormControl,Button,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.scss';


export function Header(props){
    return  ( 
        <Navbar className="header" sticky={'top'} variant="dark">
        <Navbar.Brand href="#home">Book Libarary</Navbar.Brand>
        <Nav className="mr-auto">
        <Link to="/home">
           <Nav.Link href="/" activeClassName="active">Add Book</Nav.Link>
        </Link>
        <Link to="/listbook">
          <Nav.Link href="/listbook">List Books</Nav.Link>
        </Link>
         
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      
     
 )};
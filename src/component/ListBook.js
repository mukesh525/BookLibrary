import React ,{Component} from 'react'
import {Alert,Button,Jumbotron,Modal} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from 'actions';
 class ListBook extends Component {

  componentWillReceiveProps(nextProps) {
    debugger
    console.log(this.state)
    console.log('componentWillReceiveProps', nextProps);
   }
    
    render() {
    return <div > 

      {this.props.books !== null &&
      this.props.books.data.map((book, idx) => (
        <Alert key={idx} variant={'primary'}>
          This is a {book.name} alert—check it out!
        </Alert>
      ))} 
     
      
    
       
      </div>
        
}
}
function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(ListBook)
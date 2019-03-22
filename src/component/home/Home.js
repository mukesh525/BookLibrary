import React ,{Component} from 'react'
import './home.scss'
import CarouselPage from '../../common/Carouselpage' 
import {Form,Button} from 'react-bootstrap' 
import { connect } from 'react-redux';
import * as actions from 'actions';

export  class Home extends Component {


  handleClick =()=>{
    this.props.dispatch(actions.fetchUserBook(
      {
        id:Math.floor(Math.random() * 16) + 1 ,
        name:'Anna Karenina',
        description:"Anna Karenina tells of the doomed . Tragedy unfolds as Anna rejects her passionless ",
        image:"https://source.unsplash.com/random/360x360",
        quantity:Math.floor(Math.random() * 6) + 1 
      }
    ));

  }


    render() {
    return (
     <div className="row" id="body-row">
     <div class="col py-5">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
             We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
       
        <Button variant="primary"  onClick={this.handleClick}>
           Submit
        </Button>
    </Form>
    </div>
    </div>
        
    )}
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(Home)
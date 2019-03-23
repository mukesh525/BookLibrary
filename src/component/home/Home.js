import React ,{Component} from 'react'
import './home.scss'
import { Redirect } from 'react-router-dom';
import BookCreateForm from './BookCreateForm'
import { connect } from 'react-redux';
import * as actions from 'actions';


export  class Home extends Component {
  state = {
    submit: false,
  }

   handleClick =(values)=>{
    this.props.dispatch(actions.fetchUserBook(
      {
        id:Math.floor(Math.random() * 16) + 1 ,
        name:values.name,
        description:values.desc,
        image:"https://source.unsplash.com/random/360x360",
        quantity:values.quantity,
        author:values.author,
      }
    ));
    this.setState({
      submit: true
    })
  }
  
    render() {
      if (this.state.submit === true) {
        return <Redirect to='/listbook' />
      }
    return (
      <section id='newBook'>
      <div className='bk-form'>
        <div className='row'>
          <div className='col-md-5  '>
            <h1 className='page-title'>Add Books</h1>
            <BookCreateForm onSubmit={this.handleClick} />
          </div>
          <div className='col-md-6 ml-auto'>
            <div className='image-container'>
              <h2 className='catchphrase'>Hundreds of Books stired loremxvhv  vjkvbj</h2>
              <img src={'https://source.unsplash.com/random/660x660'} alt=''/>
            </div>
          </div>
        </div>
      </div>
    </section>
        
    )}
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(Home)
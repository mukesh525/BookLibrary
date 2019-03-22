import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './common/header';
import { Provider } from 'react-redux';
import Home from './component/home/Home';
import BookDetails from './component/bookdetails/BookDetails';
import ListBook from './component/listBooking/ListBook';
import BookSearchListing from './component/listBooking/BookSearchListing';
const store = require('./reducers').init();

class App extends Component {
  render() {
    return (
       <div className="App">
        <Provider store={store}>
        <BrowserRouter>
        <Header  props={this.props}/>
        <Switch>
                      <Route exact path='/' render={() =>  <Redirect to='/AddBook' /> }/>
                      <Route exact path='/AddBook' component={Home} />
                      <Route exact path='/listbook' component={ListBook} />
                      <Route exact path='/books/:book/listbook' component={BookSearchListing} />
                      <Route exact path='/listbook/:id' component={BookDetails} />
                     
              </Switch>        
 
       </BrowserRouter>
       </Provider>
      </div>
     
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import {Header} from './common/header';

import { Provider } from 'react-redux';
import Home from './component/home/Home';
import AboutUs from './component/Aboutus';
import ListBook from './component/ListBook';
const store = require('./reducers').init();

class App extends Component {
  render() {
    return (
       <div className="App">
        <Provider store={store}>
        <BrowserRouter>
        <Header/>
        {/* <div className="row" id="body-row"> */}
         
          {/* <div class="col py-3"> */}
              <Switch>
                      <Route exact path='/' render={() =>  <Redirect to='/home' /> }/>
                      <Route exact path='/home' component={Home} />
                      <Route exact path='/listbook' component={ListBook} />
                      <Route exact path='/aboutus' component={AboutUs} />
              </Switch>        
        {/* </div>
       </div> */}
       </BrowserRouter>
       </Provider>
      </div>
     
    );
  }
}

export default App;

import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import CakeContainer from './components/cakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import UserContainer from './components/userContainer';
import Landing from './components/landing';
import Navbar from './components/navbar';
import {Provider} from 'react-redux';
import store from './redux/store';
import './style.css'
function app(){
  return ( 
    <React.Fragment>
    <Provider store={store}>
     <Router>
     <Navbar/>
        <Switch>
            <Route exact path='/home' component={Landing}></Route>
            <Route exact path='/users' component={UserContainer}></Route>
            <Route exact path='/cake' component={CakeContainer}></Route>
            <Route exact path='/icecream' component={IceCreamContainer}></Route>
        </Switch>
     </Router>
    </Provider>
    </React.Fragment>
    )
}

export default app;

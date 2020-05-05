import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import CakeContainer from './components/cakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import UserContainer from './components/userContainer';
import Landing from './components/landing';
import Navbar from './components/navbar';
import {Billing} from './components/billing';
import {Provider} from 'react-redux';
import store from './redux/store';
import './style.css'
function app(){
  return ( 
    <React.Fragment>
    <Provider store={store}>
     <Router>
     <Navbar/>
            <Route exact path='/home' component={Landing}></Route>
            <Route  path='/users' component={UserContainer}></Route>
            <Route  path='/cake' component={CakeContainer}></Route>
            <Route  path='/icecream' component={IceCreamContainer}></Route>
            <Route  path='/billing' component={Billing}></Route>
     </Router>
    </Provider>
    </React.Fragment>
    )
}

export default app;

import React from 'react';
import CakeContainer from './components/cakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import UserContainer from './components/userContainer';
import {Provider} from 'react-redux';
import store from './redux/store';
function app(){
  return ( 
    <Provider store={store}>
      <div>
          <UserContainer/>
      </div>
    </Provider>
    )
}

export default app;

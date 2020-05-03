import React from 'react';
import CakeContainer from './components/cakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import {Provider} from 'react-redux';
import store from './redux/store';
function app(){
  return ( 
    <Provider store={store}>
      <div>
            <h1>Well Come Bakery</h1>
            <CakeContainer/>
            <IceCreamContainer/>
      </div>
    </Provider>
    )
}

export default app;

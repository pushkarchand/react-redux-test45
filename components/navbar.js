import React from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

function navbar({history,match}){
  return(
      <React.Fragment>
          <ul>
              <li><NavLink activeClassName="active"  to="/home">Home</NavLink></li>
              <li><NavLink activeClassName="active" to="/users">users</NavLink></li>
              <li><NavLink activeClassName="active" to="/cake">cakes</NavLink></li>
              <li><NavLink activeClassName="active" to="/icecream">IceCream</NavLink></li>
              <li><NavLink activeClassName="active" to="/billing">Billing</NavLink></li>
          </ul>
      </React.Fragment>
  )
}

export default withRouter(navbar);
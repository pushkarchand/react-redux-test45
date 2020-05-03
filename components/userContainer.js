import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {fetchUserRequest,fetchUserSuccess,fetchUserFailure} from '../redux'
function UserContainer () {
  const users=useSelector(state=>state.user.users);
  const isLoading=useSelector(state=>state.user.isLoading);
  const error=useSelector(state=>state.user.error);
  const dispatch=useDispatch();
  console.log(users,isLoading,error);
  return (
    <div>
        <h3>Weel come users</h3>
    </div>
  )
}


export default UserContainer;
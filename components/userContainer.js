import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {fetchUserRequest,fetchUserSuccess,fetchUserFailure,fetchUser} from '../redux'
function UserContainer () {
  const users=useSelector(state=>state.user.users);
  const isLoading=useSelector(state=>state.user.isLoading);
  const error=useSelector(state=>state.user.error);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchUser())
  },[])
  return isLoading ?(<h2>Loading</h2>
    ):error?(<h2>{error}</h2>)
    :(users && users.length && users.map(user=>{
    return <p id={user.id}>{user.name}</p>
  }))
}


export default UserContainer;
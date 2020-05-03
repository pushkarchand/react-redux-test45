import {constants} from './constants';
import axios from 'axios';
export const fetchUserRequest=()=>{
  return{
    type:constants.fetchUserRequest
  }
}
export const fetchUserSuccess=(users)=>{
  return{
    type:constants.fetchUserSuccess,
    payload:users
  }
}
export const fetchUserFailure=(error)=>{
  return{
    type:constants.fetchUserFailure,
    payload:error
  }
}

export const fetchUser=()=>{
  console.log()
  return (dispatch)=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
        const users=response.data;
        dispatch(fetchUserSuccess(users));
    })
    .catch(error=>{
        const message=error.message;
        dispatch(fetchUserFailure(message));
    })
  }
}




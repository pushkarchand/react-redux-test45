import {constants} from './constants';

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




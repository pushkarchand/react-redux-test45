import {constants} from './constants';
const initialState={
  users:[],
  isLoading:false,
  error:""
}

const userReducer=(state=initialState,action)=>{
      switch(action.type){
        case constants.fetchUserRequest:{
          return{
            ...state,
            isLoading:true
          }
        }
        case constants.fetchUserSuccess:{
          return{
             users:action.payload,
            isLoading:true,
            error:''
          }
        }
        case constants.fetchUserFailure:{
          return{
            users:[],
            isLoading:true,
            error:action.payload
          }
        }
        default: return state;
      }
}

export default userReducer;
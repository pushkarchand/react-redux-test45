import {constants} from './actionTypes';
const initialState={
  noOfCakes:10
}

const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
      case constants.buyCake:{
        return {
          noOfCakes:state.noOfCakes-1
        }
      }
      default:{
        return state;
      }
    }
}

export default cakeReducer;
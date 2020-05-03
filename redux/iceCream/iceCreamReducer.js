import {constants} from './constants';
const initialState={
  noOfIceCream:20
}
const iceCreamRedux=(state=initialState,action)=>{
      switch(action.type){
        case constants.buyIceCream:{
        return { noOfIceCream:state.noOfIceCream-1}
        }
        default: return state;
      }
}

export default iceCreamRedux;
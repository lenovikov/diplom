/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
import {ACTION_TYPES} from '../actions/actionTypes'
const initialState = {
    bascet:[],
    loader:false,
}


export default (state=initialState,action)=>{
    switch (action.type) {
        
        case ACTION_TYPES.SEND_TOVAR_BASCET_SUCCESS: {
            return {
              ...state,
              bascet: [...state.bascet,action.payload],
              loading: false,
            }
        }
      
        
          default: return state;
     }
}
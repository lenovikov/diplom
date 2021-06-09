/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
import {ACTION_TYPES} from '../../actions/actionTypes'
const initialState = {
    fullInfoTovars:{},
    loader:false,
}


export default (state=initialState,action)=>{
    switch (action.type) {
        case ACTION_TYPES.GET_FULL_INFO_TOVAR_START :{
            return {
                ...state,
                loading: true,
              }
        }
        case ACTION_TYPES.GET_FULL_INFO_TOVAR_SUCCESS: {
            return {
              ...state,
              fullInfoTovars: action.payload,
              loading: false,
            }
        }
        case ACTION_TYPES.GET_FULL_INFO_TOVAR_FAILURE: {
          return {
            ...state,
            loading: false,
          }
      }
        
          default: return state;
     }
}
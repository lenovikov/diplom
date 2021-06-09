/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
import {ACTION_TYPES} from '../../actions/actionTypes'

const initialState = {
    fullTovars:[],
    loader:false,
}


export default (state=initialState,action)=>{
    switch (action.type) {
        case ACTION_TYPES.GET_FULL_LIST_TOVARS_START :{
            return {
                ...state,
                loading: true,
              }
        }
        case ACTION_TYPES.GET_FULL_LIST_TOVARS_SUCCESS: {
            return {
              ...state,
              fullTovars: action.payload,
              loading: false,
            }
        }
        case ACTION_TYPES.GET_TOVARS_FAILURE: {
          return {
            ...state,
            loading: false,
          }
      }
        
          default: return state;
     }
}
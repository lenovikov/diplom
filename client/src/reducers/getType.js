/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
import {ACTION_TYPES} from '../actions/actionTypes'

const initialState = {
    getTypes:[],
    loader:false,
}


export default (state=initialState,action)=>{
    switch (action.type) {
        case ACTION_TYPES.GET_TYPES_START :{
            return {
                ...state,
                loading: true,
              }
        }
        case ACTION_TYPES.GET_TYPES_SUCCESS: {
            return {
              ...state,
              getTypes: action.payload,
              loading: false,
            }
        }
        case ACTION_TYPES.GET_TYPES_FAILURE: {
          return {
            ...state,
            loading: false,
          }
      }
        
          default: return state;
     }
}
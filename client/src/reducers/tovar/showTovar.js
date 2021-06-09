import {ACTION_TYPES} from '../../actions/actionTypes'


const initialState = {
    shortListTovars:[],
    loading:false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) =>{
    // eslint-disable-next-line default-case
     switch (action.type) {
        case ACTION_TYPES.GET_TOVARS_START:{
            return {
                ...state,
                loading: true,
              }
        }
        case ACTION_TYPES.GET_TOVARS_SUCCESS: {
            return {
              ...state,
              shortListTovars: [...state.shortListTovars,action.payload],
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

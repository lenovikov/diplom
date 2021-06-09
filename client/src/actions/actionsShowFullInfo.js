import {ACTION_TYPES} from './actionTypes'
import axios from 'axios'


const getInfoStart = () =>({
    type:ACTION_TYPES.GET_FULL_INFO_TOVAR_START
})

const getInfoSuccess = (data) =>({
   type:ACTION_TYPES.GET_FULL_INFO_TOVAR_SUCCESS,
   payload:data

})

const getInfoFailure = (error) =>({
    type:ACTION_TYPES.GET_FULL_INFO_TOVAR_FAILURE,
    payload:error
})

export const getTovarInfo = (id) =>{
    console.log(312);
    return async (dispatch)=>{
        dispatch(getInfoStart())
        try{
            const response = await axios.get(`http://localhost:5000/api/product/show/${id}`)
            dispatch(getInfoSuccess(response.data))
        }catch(e){
            dispatch(getInfoFailure(e))
        }
    }
}
import {ACTION_TYPES} from './actionTypes'
import axios from 'axios'


const getTovarsStart = () =>({
    type:ACTION_TYPES.GET_TOVARS_START
})

const getUserSuccess = (tovars) =>({
    type:ACTION_TYPES.GET_TOVARS_SUCCESS,
    payload:tovars
   
    
})

const getUserFailure = (error) =>({
    type:ACTION_TYPES.GET_TOVARS_FAILURE,
    payload:error
})

export const getTovars = (type,col) =>{
    return async (dispatch)=>{
        dispatch(getTovarsStart())
        try{
            const response = await axios.get(`http://localhost:5000/api/product/show?typeId=${type}&limit=${col}`)
            dispatch(getUserSuccess(response.data.rows))
        }catch(e){
            dispatch(getUserFailure(e))
        }
    }
}
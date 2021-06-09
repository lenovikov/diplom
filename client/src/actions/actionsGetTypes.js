import {ACTION_TYPES} from './actionTypes'
import axios from 'axios'

    const getFullListStart = () => ({
        type:ACTION_TYPES.GET_TYPES_START
    })
    const getFullListSuccess = (data) => ({
        type:ACTION_TYPES.GET_TYPES_SUCCESS,
        payload:data
    })

    const getFullListFailure = () => ({
        type:ACTION_TYPES.GET_TYPES_FAILURE
    })


    export const getTypes = () => {
        return async(dispatch) =>{
            dispatch(getFullListStart())
            try{
                const response = await axios.get(`http://localhost:5000/api/type/show`)
                console.log(response);
                dispatch(getFullListSuccess(response.data))
            }catch(e){
                dispatch(getFullListFailure(e))
            }
        }
    }


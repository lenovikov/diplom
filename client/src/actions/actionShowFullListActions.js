import {ACTION_TYPES} from './actionTypes'
import axios from 'axios'

    const getFullListStart = () => ({
        type:ACTION_TYPES.GET_FULL_LIST_TOVARS_START
    })
    const getFullListSuccess = (data) => ({
        type:ACTION_TYPES.GET_FULL_LIST_TOVARS_SUCCESS,
        payload:data
    })

    const getFullListFailure = () => ({
        type:ACTION_TYPES.GET_FULL_LIST_TOVARS_FAILURE
    })


    export const getListsTovars = (type) => {
        return async(dispatch) =>{
            dispatch(getFullListStart())
            try{
                const response = await axios.get(`http://localhost:5000/api/product/show?typeId=${type}`)
                dispatch(getFullListSuccess(response.data.rows))
            }catch(e){
                dispatch(getFullListFailure(e))
            }
        }
    }


// !=====================================================================================================





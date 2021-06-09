import {ACTION_TYPES} from './actionTypes'
import axios from 'axios'

    const sendBascetStart = () => ({
        type:ACTION_TYPES.SEND_TOVAR_BASCET_START
    })
    export const sendFullListSuccess = (data) => ({
        type:ACTION_TYPES.SEND_TOVAR_BASCET_SUCCESS,
        payload:data
    })

    const sendFullListFailure = () => ({
        type:ACTION_TYPES.SEND_TOVAR_BASCET_FAILURE
    })



// !=====================================================================================================





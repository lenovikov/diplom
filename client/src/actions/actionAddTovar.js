import {ACTION_TYPES} from './actionTypes'
import axios from 'axios'

    
    const addTypeFailure = (e) => ({
        type:ACTION_TYPES.ADD_TYPES_FAILURE
    })


    export const addType = (name) => {
        return async(dispatch) =>{
            
            try{
                const response = await axios.post(`http://localhost:5000/api/type/create`,{
                    name
                })
            }catch(e){
                dispatch(addTypeFailure(e))
            }
        }
    }


    export const addTovar = (data) => {
        return async(dispatch) =>{
            console.log(data);
            try{
                const response = await axios.post(`http://localhost:5000/api/product/create`,{
                    name:data.name,
                    price:data.price,
                    typeId:data.type
                })
                console.log(response);
            }catch(e){
               
            }
        }
    }


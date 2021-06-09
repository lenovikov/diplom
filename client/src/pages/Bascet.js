import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {Counter} from '../components/Counter/index'
import {sendFullListSuccess} from '../actions/actionChangeBascet'

import './style.css';
import { Link } from "react-router-dom";


const style={
    big:'100px',
    medium:'50px'

}


export const Bascet = (props) => {
    const dispatch = useDispatch()
    
    const bascet = useSelector(state=>state.showBascet.bascet)
    let localBasket =JSON.parse(localStorage.getItem("test")) 
    
    console.log(bascet);
    console.log(localBasket);
    
    const [quantity,setQuanity] = useState(0)
    
    
    useEffect(()=>{
        dispatch(sendFullListSuccess({}))
    },[quantity])

    
    return (
        <>
            {localBasket&&
            <div className = 'container-tovar'>
               <div className ='container-buscet'>
               {localBasket.map((e)=>{
                   return(
                    <div className='buscet-elem' key={e.img}>
                    <p className='elem-field' >{e.name}</p>
                    <p className='elem-field' >{e.price}</p>
                    <p className='elem-field' >{e.quantity}</p>
                    <p className='elem-field' >{e.size}</p>
                    <p className='elem-field' >{e.price * e.quantity}</p>
                     </div>
                   )
                })}
               </div>
            </div>
            }     
            <button><Link to={'/order'}>Оформить заказ</Link></button>  
            
        
        </>
    )
}



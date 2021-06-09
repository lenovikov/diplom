import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getTovarInfo} from '../actions/actionsShowFullInfo'
import {ButtonSize} from '../components/Buttons/SizeButton'
import {Counter} from '../components/Counter/index'
import {sendFullListSuccess} from '../actions/actionChangeBascet'
import './style.css';


const style={
    big:'100px',
    medium:'50px'

}


export const Tovar = (props) => {
    const dispatch = useDispatch()
    let map = props.match.params.id
    const data = useSelector(state=>state.showFullInfo.fullInfoTovars)
    const bascet = useSelector(state=>state.showBascet.bascet)
    const [size,setSize] = useState('')
    const [quantity,setQuanity] = useState(0)
    
    
    useEffect(()=>{
        dispatch(getTovarInfo(map))
        localStorage.setItem('test',JSON.stringify(bascet) ); 
    },[dispatch,bascet])
    
    let obj = {name:data.name,price:data.price,img:data.img,size:size,quantity:quantity}
    console.log(obj);

    const sendData = (obj)=>{
        dispatch(sendFullListSuccess(obj))
    }

    
    console.log(bascet);
  

    return (
        <>
            {data&&
            <div className = 'container-tovar'>
            <div>
                <img width={363} height={363} src={process.env.REACT_APP_API + data.img}/>
            </div>

            <div>
                <h3 style={{fontSize:style.big,margin:0}}>{data.name}</h3>
                <h5 style={{fontSize:style.medium,margin:0}}>{data.price}</h5>
                <p> Размер</p>
                <div className='options_button'>
                    <ButtonSize  size={setSize} name='s'/>
                    <ButtonSize  size={setSize} name='m'/>
                    <ButtonSize  size={setSize} name='xl'/>
                </div>
                <Counter change={setQuanity} name={quantity}/>

                <button onClick={()=>sendData(obj)}> В корзину</button>


            </div>
           
            </div>
            
            
            
        }       
            

        </>
    )
}



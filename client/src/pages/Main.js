import SlickSlider from '../components/slickSlider'
import {Category} from '../components/index'
import { useDispatch, useSelector } from "react-redux"
import {getTypes} from '../actions/actionsGetTypes'
import { useEffect } from 'react'



export const Main = () => {
    const dispatch = useDispatch()
    const types = useSelector(state=>state.showTypes.getTypes)
    const tovarsList = useSelector(state=>state.showTovar.shortListTovars)
    

    useEffect(()=>{
        dispatch(getTypes())
    },[dispatch])

    return(
        <div style={{
            width:'100%',
        }}>
            <SlickSlider/>
            <div style={{
                width:'70%',
                margin: '0 auto',
            }}>
                {types&&types.map((elem)=>{
                    return(
                        <div key={elem.id}>
                            <Category obj={tovarsList[elem.id]} type={elem.id} name={elem.name} col={3}/>
                         </div>
                       
                    )                   
                })}
             
               
            </div>
        </div>
    )
}
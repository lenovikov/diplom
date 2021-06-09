import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import {getTovars} from '../../actions/actionShowTovars'
import {Button} from '../Buttons/mainButton'
import './style.css';

const Category = ({obj,name,type,col}) => {
    const dispatch = useDispatch()

    useEffect(()=>{
            dispatch(getTovars(type,col))
    },[dispatch])   

    return(
        <>
            <div className ='categry_container'>
                <h1>{name}</h1>
                <div className='category-tovar'>
                    {obj&&obj.map((elem)=>{
                    return(
                        <Link  to={`/product/${elem.id}`} key={elem.id}>
                            <div>
                                <img width={363} height={363} src={process.env.REACT_APP_API+elem.img}/>
                                <h3>{elem.name}</h3>
                                <p>{elem.price}</p>
                            </div>
                        </Link>
                    )})}
                </div>
                <Button type ={type}/>
             
            </div>
        </>
    )
}

export {Category}
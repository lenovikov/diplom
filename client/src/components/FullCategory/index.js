import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import {getListsTovars} from '../../actions/actionShowFullListActions'
import {Button} from '../Buttons/mainButton'
import './style.css';

const FullCategory = ({type,name}) => {
    const dispatch = useDispatch()
    const tovars = useSelector(state=>state.showFullList.fullTovars)

    useEffect(()=>{
            dispatch(getListsTovars(type))
    },[dispatch])   

    return(
        <>
            <div className ='categry_container'>
                <h1>{name}</h1>
                <div className='category-tovar'>
                    {tovars&&tovars.map((elem)=>{
                    return(
                        <Link key={elem.id}>
                            <div>
                                <img width={363} height={363} src={process.env.REACT_APP_API+elem.img}/>
                                <h3>{elem.name}</h3>
                                <p>{elem.price}</p>
                            </div>
                        </Link>
                    )})}
                </div>
            </div>
        </>
    )
}

export {FullCategory}
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './style.css'


export const ButtonSize = ({name,size}) =>{
   
    return(
        <div className={'button2'}  onClick={()=>size(name)}>
            {name}
        </div>
    )

}
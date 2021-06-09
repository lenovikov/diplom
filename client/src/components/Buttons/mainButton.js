import { Link } from "react-router-dom"
import './style.css'


export const Button = ({type}) =>{


    return(
        <div className='button1'>
            <Link to= {`/FullCategory/${type}`}>Смотреть все
            </Link>
        </div>
    )



}
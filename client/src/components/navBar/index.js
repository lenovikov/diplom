import {Link} from 'react-router-dom'
import {ROUTES} from '../../constants'
import './style.css';
import img1 from '../../image/shop.png'


const NavBar = () => {
    return(
        <nav className="navbar">
            <div className='navbar__logo'>Logo</div>
            <div className='navbar__link'>
                <Link className='navbar-link' to={ROUTES.PAJAMS}>Пижамы</Link>
                <Link className='navbar-link' to={ROUTES.PAJAMS}>Теплые Пижамы</Link>
                <Link className='navbar-link' to={ROUTES.PAJAMS}>Аксессуары</Link>
            </div>
            <div className='navbar__basket'><Link to={ROUTES.BASCET}><img src={img1}/></Link></div>
        </nav>
    )
}

export default NavBar
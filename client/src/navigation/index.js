import {BrowserRouter,Route,Switch,Redirect, Router} from 'react-router-dom'
import NavBar from '../components/navBar'
import {Main, FullCategoryPage,Tovar,Bascet,Order, AddTovar} from '../pages'


const Navigation =() =>{

    return(
        <>
        <BrowserRouter>
                <NavBar/>
            <Switch>
                <Route path = '/main' component={Main}/>
                <Route path = '/FullCategory/:id' component = {FullCategoryPage}/>
                <Route path = '/product/:id' component = {Tovar}/>
                <Route path = '/bascet' component = {Bascet}/>
                <Route path = '/order' component = {Order}/>
                <Route path = '/addTovar' component = {AddTovar}/>
                <Redirect to = '/main'/> 
            </Switch>
        </BrowserRouter>
        </>
    )

}


export default Navigation
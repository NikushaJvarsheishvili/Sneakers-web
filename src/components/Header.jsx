import '../styles/header.css'
import LogoName from '../assets/logo.svg'
import { Cart } from '../icon-components/Cart'
import { assetsBaseUrl, loggedInUser } from '../data'
import { useState } from 'react'



export const Header = () => {
    const [openCart, setOpenCart] = useState(false)
    const [cartItem, setCartItem] = useState([])
    // ! dasamatebeli aris cartis Itemebi
   
    const cartFunction = () => {
       setOpenCart(!openCart)
    }

    const nika = `${assetsBaseUrl}/${loggedInUser.profileImage}`
    return (
        <>
            <header className="container">
                <div className='center-box'>
                <div className='left-side flex'>
                    <img className='logo-name' src={LogoName} />
                    <div className='navigation-bar px-5'>
                        <button><span>Collections</span></button>
                        <button><span>Men</span></button>
                        <button><span>Women</span></button>
                        <button><span>About</span></button>
                        <button><span>Contact</span></button>
                    </div>
                </div>
                <div className='right-side'>
                    <div className='cart-container'>
                         <button onClick={cartFunction} className='cart-button'><Cart /></button>
                         <div className={`cart ${openCart ? 'open-cart' : ''}`}>
                            
                                <h1 className='cart-title'>Cart</h1>
                                <div className='cart-line'></div>
                            <div>
                                {cartItem.length === 0 ? <h1 className='cart-status'>Your cart is empty.</h1> : 'nika'}
                            </div>

                         </div>
                    </div>
                    <img className='user-icon' src={nika} />
                </div>
            </div>
            </header>
            <div className='line'></div>
        </>
        
    )
}
import '../styles/header.css'
import '../responsive-style/header-resp.css'
import LogoName from '../assets/logo.svg'
import { assetsBaseUrl, loggedInUser} from '../data'
import { useState } from 'react'
import { Cart } from '../header-components/Cart'
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-close.svg'




export const Header = (props) => {
    const [burgerMenu, setBurgerMenu] = useState(false)

    
    const imgUrl = `${assetsBaseUrl}/${loggedInUser.profileImage}`
 

    
    return (
        <>
            <header className="header-container">
                <div className='center-box'>
                <div className='left-side'>
                    <button
                        onClick={() => setBurgerMenu(!burgerMenu)} 
                        className='burger-menu-button'>

                        {burgerMenu ? <img className='close' src={close} /> : <img src={menu}/>}
                        
                    </button>
                    <img className='logo-name' src={LogoName} />
                    
                    <div className={`navigation-bar ${burgerMenu ? 'open-menu' : ''}`}>
                        <button><span>Collections</span></button>
                        <button><span>Men</span></button>
                        <button><span>Women</span></button>
                        <button><span>About</span></button>
                        <button><span>Contact</span></button>
                    </div>
                    {burgerMenu && <div className='menu-background'></div>}
                </div>
                
                <div className='right-side'>
                    <Cart 
                        setCartItem={props.setCartItem}
                        setSelectedItem={props.setSelectedItem}
                        selectedItem={props.selectedItem}
                        cartItem={props.cartItem}
                    />
                    <img className='user-icon' src={imgUrl} />
                </div>
            </div>
            </header>
            <div className='line'></div>
        </>
        
    )
}
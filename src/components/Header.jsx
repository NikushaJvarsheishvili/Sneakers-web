import '../styles/header.css'
import LogoName from '../assets/logo.svg'
import cart from '../assets/icon-cart.svg'
import { Cart } from '../icon-components/Cart'
import { assetsBaseUrl, loggedInUser } from '../data'



export const Header = () => {

   
    const nika = `${assetsBaseUrl}/${loggedInUser.profileImage}`
    console.log(nika)
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
                    <button className='cart'><Cart /></button>
                    <img src={nika} alt="nika" />
                </div>
            </div>
            </header>
            <div className='line'></div>
            
        </>
        
    )
}
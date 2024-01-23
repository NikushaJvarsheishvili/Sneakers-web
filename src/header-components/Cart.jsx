import { HeaderCart } from '../icon-components/HeaderCart'
import { Delete } from '../icon-components/Delete'
import { product, assetsBaseUrl } from '../data'
import { useState } from 'react'

export const Cart = (props) => {
    const [openCart, setOpenCart] = useState(false)



    const cartFunction = () => {
        setOpenCart(!openCart)
    }

    const totalPrice = 125 * props.selectedItem

    const productImage = `${assetsBaseUrl}/${product.images.thumbnails[3]}`


    const deleteFunction = () => {
        props.setCartItem(false)
        props.setSelectedItem(0)
    }

    return (
        <div className='cart-container'>
            <button onClick={cartFunction} className='cart-button'><HeaderCart />{props.cartItem ? <span>{props.selectedItem === 0 ? null : props.selectedItem}</span> : null}</button>
            <div className={`cart ${openCart ? 'open-cart' : ''}`}>
                            
                <h1 className={`cart-title ${openCart ? 'title-animation' : ''}`}>Cart</h1>
                    <div className={`cart-line ${openCart ? 'line-animation' : ''}`}></div>
                    <div>
                        {props.cartItem ? 
                        <div className={`cart-item-container ${openCart ? 'item-container-animation' : ''}`}>
                        <div className='cart-product'>
                            <img src={productImage}/>
                            <div className='name-and-price'>
                                <p className='name'>Fall Limited Edition Sneakers</p>
                                <p>{`$125.00 x ${props.selectedItem}`} <b>{`$${totalPrice}.00`}</b></p>
                            </div>
                            <button onClick={deleteFunction} className='item-delete'><Delete /></button>
                        </div>
                        <button className='checkout'>Checkout</button>
                        </div>
                        
                        : 
                        <h1 className={`cart-status ${openCart ? 'status-animation' : ''}`}>Your cart is empty.</h1>
                        }
                    </div>
            </div>
        </div>
    )
}
import plusIcon from '../assets/icon-plus.svg'
import minusIcon from '../assets/icon-minus.svg'
import { ProductCart } from '../icon-components/ProductCart'

export const AddToCart = (props) => {


    const addToCartFunction = () => {
        props.setCartItem(true)
        props.setSelectedQuantity(0)
        props.setSelectedItem(props.selectedItem + props.selectedQuantity)
    }

    
    return (
        <div className='add-cart'>
        <div className='increase-product'>
            <button 
                onClick={() => props.setSelectedQuantity(props.selectedQuantity - 1)} 
                disabled={props.selectedQuantity <= 0}
            >
                <img src={minusIcon} />
            </button>
            <p>{props.selectedQuantity}</p>
            <button onClick={() => props.setSelectedQuantity(props.selectedQuantity + 1)}>
                <img src={plusIcon} />
            </button>
        </div>
        <button 
            disabled={props.selectedQuantity === 0} 
            onClick={addToCartFunction} 
            className='add-to-cart'
        >
            <ProductCart />
            Add to cart
        </button>
    </div>

    )
}
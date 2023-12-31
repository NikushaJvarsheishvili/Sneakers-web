import '../styles/product.css'
import { ProductStars } from '../product-components/ProductStars'
import { AddToCart } from '../product-components/AddToCart'
import { ProductImages } from '../product-components/Product-images'

export const Product = (props) => {
    
    

    


    return (
       <div className="container">
            <ProductImages />
            <div className='describtion-side'>
                <p className='company-name'>Sneaker Company</p>
                <h1 className='product-name'>Fall Limited Edition Sneakers</h1>

                <ProductStars />
                
                <p className='product-description'>
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                <div className='price-and-discount'>
                    <p className='price'>$125.00</p>
                    <p className='discount'>50%</p>
                </div>
                <p className='old-price'>$250.00</p>
                
                <AddToCart 
                    selectedItem={props.selectedItem}
                    setSelectedItem={props.setSelectedItem}
                    selectedQuantity={props.selectedQuantity}
                    setSelectedQuantity={props.setSelectedQuantity}
                    setCartItem={props.setCartItem}
                />
            </div>
       </div>
    )
}
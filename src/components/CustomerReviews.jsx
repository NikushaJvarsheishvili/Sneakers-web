import '../styles/customer-reviews.css'
import { product } from '../data'
import { ReviewsStar } from '../icon-components/reviewsStar'
import { useState } from 'react'


export const CustomerReview = () => {
    const [userData, setUserData] = useState(product.reviews)



    const mari = []
    

    for(let i = 0; i < 5; i++) {
    
        if(mari.length < product.reviews[0].starRating) {
            mari.push(<ReviewsStar color={'#FAD409'} border={'#FAD409'}/>)
          
        } else {
            mari.push(<ReviewsStar color={'none'} border={'#616161'}/>)
           
        }
    }
 
    
   
   
    const s = mari.map((item, index) => {
        return item
    })




    const nika = userData.map((item, index) => {

        return (
            <div className='users-commentars' key={index}>
                <div className='user-image'>
                    <img src="/src/assets/user-placeholder.png" alt="" />
                </div>
                <div className='user-rating'>
                    <p className='user-name'>{item.user}</p>
                    <div>{s}</div>
                    <p className='advice'>{item.headline}</p>
                    <p className='user-description'>{item.writtenReview}</p>
                </div>
            </div>
        )
    })




    return (
        <div className="customerReview-container">
            <div className='title-message'>
                <div className='title-and-button'>
                    <h1 className='title'>Customer reviews</h1>
                    <button className='Write-review-button'>Write a review</button>
                </div>
                {nika}
            </div>
        </div>
    )
}
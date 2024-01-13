import { useState } from 'react'
import { product } from '../data'
import { ReviewsStar } from '../icon-components/reviewsStar'


export const UsersComponent = () => {
    const [userData, setUserData] = useState(product.reviews)



    const users = userData.map((item, index) => {

        const allStars = []
    

        for(let i = 0; i < 5; i ++) {
            if(allStars.length < product.reviews[index].starRating) {
                allStars.push(<ReviewsStar key={i} color={'#FAD409'} border={'#FAD409'}/>)
            } else {
                allStars.push(<ReviewsStar key={i} color={'none'} border={'#616161'}/>)
            }
        }

        const starsMap = allStars.map(item => item)



        return (
            <div className='users-commentars' key={index}>
                <div className='user-image'>
                    <img src="/src/assets/user-placeholder.png" alt="" />
                </div>
                <div className='user-rating'>
                    <p className='user-name'>{item.user}</p>
                    <div className='stars'>{starsMap}</div>
                    <p className='advice'>{item.headline}</p>
                    <p className='user-description'>{item.writtenReview}</p>
                </div>
            </div>
        )
    })

    
    return (
        <>
            {users}
        </>
    )
}
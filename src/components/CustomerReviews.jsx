import '../styles/customer-reviews.css'
import '../responsive-style/customerReviews-resp.css'
import { UsersComponent } from '../customer-reviews-components/UsersComponents'


export const CustomerReview = (props) => {

    const writeReviewFunction = () => {
        props.setAddReview(true)
    }




    return (
        <>
                <div className="customerReview-container">
                    <div className='title-message'>
                        <div className='title-and-button'>
                    <h1 className='title'>Customer reviews</h1>
                        <button  
                        onClick={writeReviewFunction}
                        className='write-review-button'>
                            <span>Write a review</span>
                        </button>
                     </div>
                    <UsersComponent userData={props.userData} setUserData={props.setUserData}/>
                    </div>
                </div>
        </>)
}   
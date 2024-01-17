import '../styles/add-review.css'
import '../responsive-style/add-review.resp.css'
import { RateStars } from '../addReview-compontens/RateStars'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validationSchema, initialValues} from '../Formik-components/AddReviewForm'
import { loggedInUser } from '../data'


export const AddReview = (props) => {
    
    
    const submitForm = (values) => {
        props.setUserData([{
            user: loggedInUser.name,
            starRating: values.starRating,
            writtenReview: values.writtenReview,
            headline: values.headline
        }, ...props.userData])
        props.setAddReview(false)
    }

    

    


    return (
       <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={submitForm}
       >
            {(formik) => {
                

                return(
                    <div className="add-review-container">
                        <div className="add-review-center-box">
                            <div className="title">Add a review</div>
                            <div className="overall-rating">Overall Rating</div>
                            <RateStars formik={formik}/>
                            <ErrorMessage className='error' component='span' name='starRating'/>
                            
                            <Form>

                            <label className='headline-label'>Headline</label>
                            <Field className='headline' name='headline' type='text' placeholder='What’s most important to know?'/>
                            <ErrorMessage className='error' component='span' name='headline' />


                            <label className='written-review-label'>Written review</label>
                            <Field className='written-review' name='writtenReview' as='textarea' placeholder='What did you like or dislike? What did you use this product for?'/>
                            <ErrorMessage className='error' component='span' name='writtenReview'/>
                            
                            
                            <div className="cancel-add-container">
                                <button onClick={() => props.setAddReview(false)} type='button' className='cancel'>Cancel</button>

                                <button type='submit' className='add'>Add</button>
                            </div>
                        
                            </Form>
                    </div>
                </div>
                )}
            }
       </Formik>
    )
}







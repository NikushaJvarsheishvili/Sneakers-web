import { Star } from '../icon-components/Star'


export const ProductStars = () => {
    const starsArray = []

    for(let i = 0; i < 5; i++) {
        if(starsArray.length < 4) {
            starsArray.push(<Star stroke={'#FAD409'} color={'#FAD409'}/>)
        } else {
            starsArray.push(<Star stroke={'black'} color={'none'}/>)
        }
    }

    const stars = starsArray.map((item, index) => {
        return (
            <div key={index}>
                {item}
            </div>
        )
    })





    return (
        <div className='product-evaluation'>
            <div className='stars'> 
                {stars}
            </div>
            <p>4.2 out of 5</p>  
        </div>
    )
}
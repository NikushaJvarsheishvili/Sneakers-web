import {assetsBaseUrl, product} from '../data'
import { useState } from 'react'


export const ProductImages = () => {

    const [imageAddress, setImageAddress] = useState(0)

    const originalImage = `${assetsBaseUrl}/${product.images.originals[imageAddress]}`

   
    const thumbnailsImage = product.images.thumbnails.slice().reverse().map((item, index) => {
        


        return (
            <div key={index}>
                <button onClick={() => setImageAddress(index)}><img className={`thumbnails-image ${imageAddress === index ? 'active' : ''}`} src={`${assetsBaseUrl}/${item}`}/></button>
            </div>
        )
    })

    return (
        <>
            <div className='image-side'>
                <div className='original-side'>
                    <img className='original-image' src={originalImage} alt="" />
                </div>
                <div className='thumbnails-side'>
                    {thumbnailsImage}
                </div>
            </div>


        </>

    )
}
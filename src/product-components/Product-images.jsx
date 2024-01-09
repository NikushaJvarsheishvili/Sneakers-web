import {assetsBaseUrl, product} from '../data'
import { useState } from 'react'
import next from '../assets/icon-next.svg'
import previous from '../assets/icon-previous.svg'

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

    const nextFunction = () => {
        if(imageAddress === 3) {
            setImageAddress(0)
        } else {
            setImageAddress(imageAddress + 1)
        }
    }

    const previousFunction = () => {
        if(imageAddress === 0) {
            setImageAddress(3)
        } else {
            setImageAddress(imageAddress - 1)
        }
    }

    return (
        <>
            <div className='image-side'>
                <div className='original-side'>
                    <img className='original-image' src={originalImage} alt="" />
                </div>
                <div className='next-previous'>
                    <button onClick={previousFunction} className='next'>
                        <img src={previous} />
                    </button>
                    <button onClick={nextFunction} className='previous'>
                        <img src={next} />
                    </button>
                </div>
                <div className='thumbnails-side'>
                    {thumbnailsImage}
                </div>
            </div>


        </>

    )
}
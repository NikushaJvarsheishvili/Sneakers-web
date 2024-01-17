import './App.css'
import './styles/config.css'
import { Header } from './components/Header'
import { Product } from './components/Product'
import { useState } from 'react'
import { CustomerReview } from './components/CustomerReviews'
import { AddReview }  from './components/AddReview'
import { product } from './data'


function App() {
  const [selectedQuantity, setSelectedQuantity] = useState(0)
  const [selectedItem, setSelectedItem] = useState(0)
  const [cartItem, setCartItem] = useState(false)
  const [addReview, setAddReview] = useState(false)
  const [userData, setUserData] = useState(product.reviews)





  return (
    <>
      <Header 
        selectedItem={selectedItem}
        cartItem={cartItem} 
        setCartItem={setCartItem}
        setSelectedItem={setSelectedItem}
      />
      <Product 
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        selectedQuantity={selectedQuantity} 
        setSelectedQuantity={setSelectedQuantity} 
        cartItem={cartItem} 
        setCartItem={setCartItem}
      />

      {addReview ? <AddReview setAddReview={setAddReview} setUserData={setUserData} userData={userData}/> : 
      <CustomerReview setAddReview={setAddReview} userData={userData} setUserData={setUserData}/>}
      

      
    </>
  )
}

export default App

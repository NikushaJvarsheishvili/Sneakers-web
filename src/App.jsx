import './App.css'
import './styles/config.css'
import { Header } from './components/Header'
import { Product } from './components/Product'
import { useState } from 'react'
import { CustomerReview } from './components/CustomerReviews'


function App() {
  const [selectedQuantity, setSelectedQuantity] = useState(0)
  const [selectedItem, setSelectedItem] = useState(0)
  const [cartItem, setCartItem] = useState(false)


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
      <CustomerReview />
    </>
  )
}

export default App

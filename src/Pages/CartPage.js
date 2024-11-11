import React from 'react'
import '../styles/cart.css';

export default function cart() {
  return (
    <div>
      <h2 className='Cart container bg-primary-subtle mt-4'>My Cart</h2>
      <h3 className='container mt-4'>Your Cart is Empty</h3>
      <div className='foot container'>
        <h3>Total</h3>
        <h2>$ 0.00</h2>
      </div>


      
    </div>
    
    
  )
}

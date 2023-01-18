import React from 'react'
//import './Cart.css'

function Order({ name, price, piece }) {

  return (
    <div className='Order'>
      <h1>{name}</h1>
      <h2>{piece} x {price} $</h2>
    </div>
  )
}

export default Order
import React from 'react'
import './Confirm.css'
import fireImg from './../img_pub/flaming-pizza.webp'

function Confirm({isVisibleConf}) {

  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <div className={isVisibleConf ? "order-done-backg" : "none"} >
      <div className="order-done">
        <h1>Grazie!</h1>
        <h2>Your pizza is already burning!</h2>
        <img src={ fireImg } className="od-img" alt='flaming-pizza'/>
        <button className='reload' onClick={refreshPage}>Go back to the kitchen!</button>
      </div>
    </div>
  )
}

export default Confirm;
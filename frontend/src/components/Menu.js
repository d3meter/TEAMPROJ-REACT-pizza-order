import React, { useEffect, useState, useRef } from 'react'
import Pizza from './Pizza'
import Input from './Input'
import Order from './Order'
import './Menu.css';
import DelBtn from './../img_pub/delete.png'

function Menu() {

  const [pizzas, setPizzas] = useState([])
  const [orders, setOrders] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const firstRef = useRef(null);

  useEffect(() => {
    let orderArray = [...orders];
    let orderPrice = [];
    orderArray.forEach(elem => orderPrice.push(elem.price*elem.piece))
    let priceSum = orderPrice.reduce((p, c) =>
      p+c, 0)
    setTotalPrice(priceSum)
  }, [orders])

  useEffect(() => {
    firstRef.current?.scrollIntoView({behavior: 'smooth'})
  }, [isVisible])
  
  const handleVisible = () => {
    if (totalPrice)
    setIsVisible(true)
  }

  const onPizzaChange = (name, price, piece) => {
    setOrders([...orders, {name, price, piece}])
  } 

  const handleRemoveDiv = () => {
    var arrayCopy = [...orders];
    arrayCopy.splice(0);
    setOrders(arrayCopy);
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/pizzas`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setPizzas(data)
    })
  }, [])

  return (
    <div className='Menu'>
      <div className='c-title'>
      <h1 className="title">Buongiorno!</h1>
          <h2 className="title-text">We deliver the best pizzas to your home</h2>
      </div>
      <div className='c-menu'>
        {pizzas
          .map((pizza) => <Pizza key={pizza.id} name={pizza.name} id = {pizza.id} ingredients = {pizza.ingredients} price = {pizza.price} onChange={onPizzaChange} />)}
      </div>
      <div className="c-order">
          <div className="co-bar">
            <h1>Your order</h1>
            <hr />
            <div className="order-pizza" id="op">
              {orders.map(order => <Order name={order.name} price={order.price} piece={order.piece} key={order.name} />)}
            </div>
            <hr />
            <h2>Total:</h2>
            <h4 className="orderSum">{totalPrice} $</h4>
            <h3>free delivery on planet Earth</h3>
            <button className="place-order" onClick={() => {
              handleVisible()}
              }>PLACE ORDER</button>
            <h5>or</h5>
            <div className="del-button-field">
              <button className="del-order" onClick={handleRemoveDiv} >
                <img src={ DelBtn } className="delBtn" alt="" />
              </button>
            </div>
          </div>
        </div>
      <Input orders={orders} isVisible={isVisible} ref={firstRef} />
    </div>
  )
}

export default Menu
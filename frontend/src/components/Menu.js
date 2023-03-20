import React, { useEffect, useState, useRef } from "react";
import Pizza from "./Pizza";
import Input from "./Input";
import Order from "./Order";
import "./Menu.css";
import DelBtn from "./../img_pub/delete.png";
import pizzas from "../data/pizza.json";

function Menu() {
  const [orders, setOrders] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const firstRef = useRef(null);

  useEffect(() => {
    let orderArray = [...orders];
    let orderPrice = [];
    orderArray.forEach((elem) => orderPrice.push(elem.price * elem.piece));
    let priceSum = orderPrice.reduce((p, c) => p + c, 0);
    setTotalPrice(priceSum);
  }, [orders]);

  useEffect(() => {
    firstRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [isVisible]);

  const handleVisible = () => {
    if (totalPrice) setIsVisible(true);
  };

/*   const onPizzaChange = (name, price, piece) => {
    if (orders.length !== 0) {
      for  (let i = 0; i < orders.length; i++) {
        if (orders[i].name === name) {
          orders[i].piece += piece;
        } else {
          setOrders([...orders, { name, price, piece }]);
        }
      }
    } else {
      setOrders([...orders, { name, price, piece }]);
    }
  }; */
  
  const onPizzaChange = (name, price, piece) => {
    if (orders.filter((e) => e.name === name).length > 0) {
      for (let i = 0; i < orders.length; i++) {
       if (orders[i].name === name) {
        orders[i].piece += piece
        setOrders([...orders])
       }
      }
    } else {
      setOrders([...orders, { name, price, piece }]);
    }
  };
  console.log(orders);

  const handleRemoveDiv = () => {
    var arrayCopy = [...orders];
    arrayCopy.splice(0);
    setOrders(arrayCopy);
  };

  return (
    <div className="Menu">
      <div className="c-title">
        <h1 className="title">Buongiorno!</h1>
        <h2 className="title-text">We deliver the best pizzas to your home</h2>
      </div>
      <div className="c-container">
        <div className="c-menu">
          {pizzas.map((pizza, i) => (
            <Pizza
              key={i}
              name={pizza.name}
              id={pizza.id}
              ingredients={pizza.ingredients}
              price={pizza.price}
              onPizzaChange={onPizzaChange}
            />
          ))}
        </div>
        <div className="c-order">
          <div className="co-bar">
            <h1>Your order</h1>
            <hr />
            <div className="order-pizza" id="op">
              {orders.map((order) => (
                <Order
                  name={order.name}
                  price={order.price}
                  piece={order.piece}
                  key={order.name}
                />
              ))}
            </div>
            <hr />
            <h2>Total:</h2>
            <h4 className="orderSum">{totalPrice} $</h4>
            <h3>free delivery on planet Earth</h3>
            <button
              className="place-order"
              onClick={() => {
                handleVisible();
              }}
            >
              PLACE ORDER
            </button>
            <h5>or</h5>
            <div className="del-button-field">
              <button className="del-order" onClick={handleRemoveDiv}>
                <img src={DelBtn} className="delBtn" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Input orders={orders} isVisible={isVisible} ref={firstRef} />
    </div>
  );
}

export default Menu;

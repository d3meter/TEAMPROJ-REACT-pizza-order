import './Input.css';
import vespaLogo from './../img_pub/vespamini.png'
import React from "react";
import { useState,forwardRef} from 'react';
import Confirm from './Confirm';

function Input({orders, isVisible}, firstRef) {
    const [inputs, setInputs] = useState({});
    const handleClick = e => setInputs(prevState => ({...prevState, orders: orders, [e.target.name]: e.target.value }));

    const [isVisibleConf, setIsVisibleConf] = useState(false)

  function sendData(e) {
    e.preventDefault();

    fetch("/input", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
  }

  let size = Object.keys(inputs).length;

  const areTrue = Object.values(inputs).every(value => value !== "");

  const handleVisibleConf = () => {
    if(size === 7 && areTrue === true){
      setIsVisibleConf(true)
    }
  }

  return(
    <>
    <form ref={firstRef} className={isVisible ? "Input": "none"} onSubmit={sendData}>
      <h1 className="title">Where to go?</h1>
          <div className="cd-input">
            <div className="input-name">
              <label htmlFor="name">Name:</label><br />
              <input type="text" name="name" id="name" value={inputs.name || ''} onChange={handleClick} required />
            </div>

            <div className="input-phone">
              <label htmlFor="phone">Phone:</label><br />
              <input type="number" name="phone" id="phone" value={inputs.phone || ''} onChange={handleClick} required />
            </div>

            <div className="input-zip">
              <label htmlFor="zip">ZIP code:</label><br />
              <input type="number" name="zip" id="zip" value={inputs.zip || ''} onChange={handleClick} required />
            </div>

            <div className="input-city">
              <label htmlFor="city">City:</label><br />
              <input type="text" name="city" id="city" value={inputs.city || ''} onChange={handleClick} required />
            </div>

            <div className="input-street">
              <label htmlFor="street">Street:</label><br />
              <input type="text" name="street" id="street" value={inputs.street || ''} onChange={handleClick} required />
            </div>

            <div className="input-house">
              <label htmlFor="house">House Nr.:</label><br />
              <input type="number" name="house" id="house" value={inputs.house || ''} onChange={handleClick} required />
            </div>
          </div>
          <div className="cd-button-field">
            <button className="go-button" type='submit' onClick={ () => {handleVisibleConf() }}>GO,<br /> Avanti!
                <img src={vespaLogo} className="vespa-mini" alt="vespa"/>
            </button>
          </div>
    </form>
    <Confirm isVisibleConf={isVisibleConf}/>
    </>
  )
}

export default forwardRef(Input);
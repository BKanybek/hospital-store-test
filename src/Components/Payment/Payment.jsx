import { useState, useRef, useEffect, useContext } from "react";
import Cards from 'react-credit-cards'
import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom";
import { productContext } from "../../ProductContext/ProductContext";
import './Payment.css'

export default function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const { cart, deleteCartPayment } = useContext(productContext)
  console.log(cart, 'test')

  useEffect(() => {
    ref.current.focus();
  }, []);

  const ref = useRef(null);
  return (
    <div className="cards">
      <div style={{ paddingTop: '100px', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
        <form style={{paddingTop: '20px', display: 'flex', flexDirection: 'column', }}>
          <input style={{marginTop: '20px'}}
            type="tel"
            name="number"
            maxLength="16"
            placeholder="Card Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            ref={ref}
          />
          <input style={{marginTop: '20px'}}
            type="tel"
            maxLength="4"
            name="cvc"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input style={{marginTop: '20px'}}
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input style={{marginTop: '20px'}}
            type="text"
            maxLength="4"
            name="expiry"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </form>
          <Link to='/'>
            <div className="form-actions">
                <button className="btn btn-primary btn-block" onClick={() => deleteCartPayment()}>Pay</button>
            </div>
          </Link>
          <Link to='/cart'>
            <div className="form-cart">
                <button className="btn btn-primary btn-block">Back to cart</button>
            </div>
          </Link>
      </div>
    </div>
  );
}

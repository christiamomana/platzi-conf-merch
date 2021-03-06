import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

import '../styles/Information.css';

const Information = () => {
  const { state: { cart }, addToBuyer } = useContext(AppContext)
  const navigate = useNavigate();

  const formRef = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(formRef.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    }

    addToBuyer(buyer)
    console.log('je')
    navigate('/checkout/payment')
  }

  return <div className="Information">
    <div className="Information-content">
      <div className="Information-head">
        <h2>Informacion de contacto</h2>
      </div>
      <div className="Information-form">
        <form ref={formRef}>
          <input type="text" placeholder="Nombre completo" name="name" />
          <input type="text" placeholder="Corre electronico" name="email" />
          <input type="text" placeholder="Dirección" name="address" />
          <input type="text" placeholder="apto" name="apto" />
          <input type="text" placeholder="Ciudad" name="city" />
          <input type="text" placeholder="Pais" name="country" />
          <input type="text" placeholder="Departamento" name="state" />
          <input type="text" placeholder="Codigo Postal" name="cp" />
          <input type="text" placeholder="Telefono" name="Phone" />
        </form>
      </div>
      <div className="Information-buttons">
        <Link to="/checkout">

          <div className="Information-back">Regresar</div>
        </Link>
        <div className="Information-next">
          <button onClick={handleSubmit}  type="button">
            Pagar
          </button>
        </div>
      </div>
    </div>
    <div className="Information-sidebar">
      <h3>Pedidos</h3>
      {cart.map(item => (
        <div className="Information-item" key={item.title}>
        <div className="Information-element">
          <h4>{item.title}</h4>
          <span>{item.price}</span>
        </div>
      </div>
      ))}
      
    </div>
  </div>
};

export default Information;

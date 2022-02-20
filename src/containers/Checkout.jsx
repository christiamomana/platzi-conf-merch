import React, { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Checkout.css';
import AppContext from '../context/AppContext';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleSumTotal = useCallback(() => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }, [cart]);

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin pedidos</h3>}
        {cart.map((item) => (
          <div className="Checkout-item" key={item.id}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
              <button type="button" onClick={() =>handleRemove(item)}>
                {' '}
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          </div>
        ))}
        
      </div>
      {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>Precio total: {handleSumTotal()} </h3>
            <Link to="/checkout/information">
              <button type="button">Continuar pedido</button>
            </Link>
          </div>
        )}
    </div>
  );
};

export default Checkout;

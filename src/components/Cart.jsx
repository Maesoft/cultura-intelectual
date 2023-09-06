import React from 'react';
import '../styles/App.css';
import Cards from './Cards'

function Cart({ cart, totalPrice, onBack, onRemoveItem }) {
  const handleRemoveItem = (itemId) => {
    onRemoveItem(itemId);
  };
       //Funcion para agregar productos al carrito
       const addToCart = (item) => {
        setCart([...cart, item]);
      };
      
      //Funcion para remover objetos del carrito
      const removeFromCart = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
      };
    
      //Funcion del precio total
      const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price, 0);
      };
    
      //Funcion para mostrar y esconder el contenido del carrito
      const toggleCart = () => {
        setShowCart(!showCart);
      };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>the cart it's empty...</p>
      ) : (
        <>
          <div>
            {cart.map(item => (
              <div id='cardItems' key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <img id='image' src={item.image} alt={item.title} />
                <p>Price: ${item.price}</p>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <p>Total Price: ${totalPrice}</p>
        </>
      )}
      <button onClick={onBack}>close</button>
    </div>
  );
}

export default Cart;
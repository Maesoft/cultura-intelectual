import React from 'react';
import '../styles/App.css';
import '../styles/Cart.css';


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
    <div className='cart'>
      <h2 className='name'>Compras</h2>
      {cart.length === 0 ? (
        <p className='name'>Su carro de compras esta vacio...</p>
      ) : (
        <>
          <div className='contCards1'>
            <ul className='ulCards'> 
            {cart.map(item => (
                <li className='liCards1' key={item.id}>
                <img className='imgCards1' src={item.imagen} alt="" />
                <div className='contInfo1'>
                <h3 className='pTitle1'>{item.titulo}</h3>
                <p className='pPrice1'><span>$</span>{item.precio}</p>
                </div>
                <button className='btnEliminar' onClick={() => handleRemoveItem(item.id)}>Eliminar</button>                
              </li>              
            )
          )
        }
        </ul>
        </div>
        </>
      )}
      <p className='pPrice2'>Total : ${totalPrice}</p>
        <div className='cont-btncart'>
          <button className='btnCloseCart' onClick={onBack}>Continuar Comprando</button>
          <button className='btnBuy'>Finalizar Compra</button>
        </div>
    </div>
  );
}

export default Cart;
import React from 'react';
import '../styles/Cards.css';

const Cards = ({ productos, addToCart }) => {
    return (
        <>
            <div className='contCards'>
                <ul>
                    {productos.map(item =>
                        <li className='liCards' key={item.id}>
                            <img className='imgCards' src={item.imagen} alt="" />
                            <div className='contInfo'>
                                <p className='pTitle'>{item.titulo}</p>
                                <p className='pPrice'><span>$</span>{item.precio}</p>
                            </div>
                            <div className='contCarroCompras'>
                            <button onClick={() => addToCart(item)}>Add to cart</button>
                            </div>
                        </li>)
                    }
                </ul>
            </div>
        </>
    );
};

export default Cards;

import React, { useState } from 'react';
import "../styles/Categorias.css"
const Categorias = ({ cambiar }) => {

    const [price, setPrice] = useState("1")
    function handlerPrice(e) {
        setPrice(e.target.value)

        cambiar(estadoAnt => ({
            ...estadoAnt,
            minPrice: e.target.value
        }))
    }

    const handleCategoria = (e) => {
        cambiar(estadoAnt => ({
            ...estadoAnt,
            categoria: e.target.value
        }))
    }

    return (
        <>
            <div className='contCategorias '>
                <div className='contPrecio'>
                    <label className='labelPrecio' htmlFor="precio">Precio  </label>
                    <input className='inputPrice' onChange={handlerPrice} type="range" id='precio' min={"0"} max={"1000"} />
                    <p className='price'>${price}</p>
                </div>
                <div className='contSelect'>
                    <label htmlFor="categorias">Categorias  </label>
                    <select id="categorias" onChange={handleCategoria}>
                        <option value="all">Todos los productos</option>
                        <option value="ficcion">Ficcion</option>
                        <option value="aventura">Aventura</option>
                        <option value="romance">Romance</option>
                        <option value="accion">Accion</option>

                    </select>
                </div>
            </div>
        </>
    );
};

export default Categorias;
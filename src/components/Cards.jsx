import "../styles/Cards.css"


const Cards = ({ productos,  }) => {


    return (

        <>
            <div className='contCards'>
                <ul>
                    {productos.map(item =>
                        <li className='liCards' key={item.id}>
                            <img className='imgCards' src={item.image} alt="" />
                            <div className='contInfo'>
                                <p className='pTitle'>{item.title}</p>
                                <p className='pPrice'><span>$</span>{item.price}</p>
                            </div>
                            <div className='contCarroCompras'>
                                <button  className='btnCarroCompras'>Comprar</button>
                            </div>
                        </li>)
                    }
                </ul>
            </div>
        </>
    );
};

export default Cards;

  import '../styles/App.css'
  import Cards from './Cards';
  import Cart from './Cart';
  import { useContext, useState } from 'react';
  import { productsContext } from '../context/ProductsContext.jsx';
  import { filterProductos } from "../funciones/filterProductos"
  import Search from './Search';
  import ImageSlider from './ImgSlider';
  import BurgerMenu from './BurgerMenu';
  import logo from '../assets/logo.png'
  import Categorias from './Categorias';

  function App() {

    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    
        const containerStyles ={
        with:"500px",
        height:"380px",
        paddingTop:"20px",
        margin:"0 auto",
        position: "relative"
      }
      // Carga y filtra los productos 
      const producto = useContext(productsContext)
      const [filters, setFilters] = useState({
        titulo: "",
        categoria: "all",
        minPrice: "0"
      })

      //filtrado de elementos que se muestran en pantalla
      const filteredProducts = filterProductos(producto, filters)


  
      // Determina si se debe mostrar la sección de resultados de búsqueda
      const showSearchResults = filters.titulo !== ""|| filters.categoria !== "all" || filters.minPrice !== "0";

      // Función para obtener 10 imágenes de productos
      const tenProductImages = () => {
        const tenProductImages = [];
        
        for (let i = 0; i < 10 && i < filteredProducts.length; i++) {
        tenProductImages.push(filteredProducts[i].image);
        
        }
          return tenProductImages;
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
      <>
        <BurgerMenu >
          <Categorias cambiar={setFilters}></Categorias>
        </BurgerMenu>
        <header>
          <img src={logo} alt="Logo"/>
          <section className='logoBuscar'>
            <Search cambiar={setFilters}></Search>
          {showCart ? (
            <Cart
                cart={cart}
                totalPrice={getTotalPrice()}
                onBack={toggleCart}
                onRemoveItem={removeFromCart} // Pasamos la función de eliminación
              />
            ) : (
              <button onClick={toggleCart} className="cart-button">Cart</button>
              )}
              </section>
        </header>
  

          {!showSearchResults && (
            <div style={containerStyles}>
              <ImageSlider sliders={tenProductImages()}/>
            </div>
          )}
                {showSearchResults ? (
            <section>
              <p>Resultado de búsqueda...</p>
               <Cards productos={filteredProducts} addToCart={addToCart} />
        
            </section>
          ) : (
            <section>
              <p>novedades...</p>
              <Cards productos={filteredProducts.slice(0, 10)} addToCart={addToCart} />
            </section>
          )}

      </>
    )
  }

  export default App

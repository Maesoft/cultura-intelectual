import '../styles/App.css'
import Cards from './Cards';
import { useContext, useState } from 'react';
import { productsContext } from '../context/ProductsContext.jsx';
import { filterProductos } from "../funciones/filterProductos"
import Search from './Search';
import BurgerMenu from './BurgerMenu';

function App() {

    // Carga y filtra los productos 
    const producto = useContext(productsContext)
    const [filters, setFilters] = useState({
      titulo: ""
    })

    //filtrado de elementos que se muestran en pantalla
    const filteredProducts = filterProductos(producto, filters)

     // Muestra solo los primeros 10 productos
    const displayedProducts = filteredProducts.slice(0, 10);
 
    // Determina si se debe mostrar la sección de resultados de búsqueda
    const showSearchResults = filters.titulo !== "";

    return (
    <>
      <header>
         <BurgerMenu/>
        <section className='logoBuscar'>
          <h2>Logo</h2>
          <Search cambiar={setFilters}></Search>
        </section>
        <button>Carrito</button>
      </header>
 

        {!showSearchResults && (
          <section>
            <p>Aquí va el carrusel</p>
          </section>
        )}
              {showSearchResults ? (
          <section>
            <p>Resultado de búsqueda...</p>
          </section>
        ) : (
          <section>
            <p>Novedades...</p>
          </section>
        )}

      <section>
      <Cards productos={displayedProducts}></Cards>
      </section>


    </>
  )
}

export default App

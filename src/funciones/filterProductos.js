export const filterProductos = (producto,filters) => {

    return producto.filter(product => {
      

      if (product.precio < filters.minPrice) {
        return false;
      }

      if (filters.categoria !== "all" && product.coleccion !== filters.categoria) {
        return false;
      }

      if (filters.titulo.trim() !== "") {
        const titulo = filters.titulo.toLowerCase();
        const productosTitulo = product.titulo.toLowerCase();
        if (!productosTitulo.includes(titulo)) {
          return false;
        }
      }

      return true;
    })
  }
  
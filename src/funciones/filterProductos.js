export const filterProductos = (producto,filters) => {

    return producto.filter(product => {
      

      if (product.price < filters.minPrice) {
        return false;
      }

      if (filters.categoria !== "all" && product.category !== filters.categoria) {
        return false;
      }

      if (filters.titulo.trim() !== "") {
        const titulo = filters.titulo.toLowerCase();
        const productosTitulo = product.title.toLowerCase();
        if (!productosTitulo.includes(titulo)) {
          return false;
        }
      }

      return true;
    })
  }
  
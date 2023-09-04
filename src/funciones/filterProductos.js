export const filterProductos = (producto,filters) => {

    return producto.filter(product => {

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
  
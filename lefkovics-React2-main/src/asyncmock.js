const productos = [
    { nombre: "Conjunto Sport", precio: 15000, stock: 10, id: "1", img: "../img/hombre.jpg", idCat: "2" },
    { nombre: "Zapatillas Style", precio: 18000, stock: 10, id: "2", img: "../img/hombre1.jpg", idCat: "2" },
    { nombre: "Zapatillas Urban", precio: 20000, stock: 10, id: "3", img: "../img/mujer.jpg", idCat: "3" },
    { nombre: "Botines Espaciales", precio: 40000, stock: 10, id: "4", img: "../img/mujer1.jpg", idCat: "3" },
    { nombre: "Conjunto Quita Frio", precio: 40000, stock: 10, id: "5", img: "../img/niños.jpg", idCat: "4" },
    { nombre: "Conjunto Canchero", precio: 34000, stock: 10, id: "6", img: "../img/niños1.jpg", idCat: "4" },

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}
const productos = [
    {id: "1", nombre: "Hosting", precio: 5000, img: "./img/Server.png", idCat: "1" },
    {id: "2", nombre: "Servidores", precio: 12000, img: "./img/Server.png", idCat: "2" },
    {id: "3", nombre: "Servidores de Voz", precio: 8000, img: "./img/Server.png", idCat: "2" },
    {id: "4", nombre: "Dominios", precio: 19000, img: "./img/Server.png", idCat: "1" }
]

export const getProductos = () => {
    return new Promise ( (resolve) => {
        setTimeout ( ()=> {
            resolve(productos);
        }, 2000)
    })
}

export const getProducto = (id) => {
    return new Promise ( (resolve) => {
        setTimeout ( ()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getCategoria = (idCategoria) => {
    return new Promise ( (resolve) => {
        setTimeout ( ()=> {
            const productosCat = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCat);
        }, 2000)
    })
}
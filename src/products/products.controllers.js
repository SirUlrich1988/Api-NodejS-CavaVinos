const uuid = require("uuid")
const Products = require('../models/products.models')

// -- Funcion para hacer un llamado de todos los productos -- //

const getAllProducts = ()=> {
    const data = Products.findAll()
    return data
}

// -- Funcion para crear un producto nuevo -- //

const createProduct = async (data)=> {
    const newProduct = await Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvailable: data.isAvailable
    })
    return newProduct
}

// -- Funcion para buscar un articulo por ID -- //

const getProductById = async (id)=> {
    const data = await Products.findOne({
        where: {
            id: id
        }
    })
    return data
}

// -- Funcion para modificar un producto tanto para PUT como para PATCH -- //

const modifyProduct = async (id, data)=> {
    const response = await Products.update(data, {
        where: {
            id: id
        }
    })
    return response
}

// -- Funcion para eliminar un producto -- //

const removeProduct = async (id)=> {
    const data = await Products.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = { getAllProducts, createProduct, getProductById, modifyProduct, removeProduct }
const Product = require('../models/product.model');

const products = [];

exports.getAll = (req, res) => {
    res.status(200).send(products);
};

exports.add = (req, res) => {
    console.log(req.body);
    const product = new Product(req.body.id, req.body.name, req.body.description, req.body.price);
    products.push(product);
    res.status(201).send(product);
}

exports.update = (req, res) => {
    console.log(req.body);
    const updateProduct = new Product(req.body.id, req.body.name, req.body.description, req.body.price);
    const productIndex = products.findIndex((product) => product.id === req.body.id);
    products.splice(productIndex, 1, updateProduct);
    res.status(200).send(updateProduct);
}

exports.delete = (req, res) => {
    console.log(req.params.id);
    const productIndex = products.findIndex((product) => product.id === req.param.id)
    const deleted = products.splice(productIndex, 1)
    res.status(200).send(deleted)
}
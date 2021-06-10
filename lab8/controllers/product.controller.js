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
    for (let i = 0; i < products.length; i++) {
        const pro = products[i];
        if (pro.id == req.body.id) {
            console.log(" p" + i);
        }
    }
    delete products[req.body.id]
    products[req.body.id] = new Product(req.body.id, req.body.name, req.body.description, req.body.price);
}

exports.delete = (req, res) => {
    console.log(req.params.id);
    products.splice(req.params.id, 1)
}
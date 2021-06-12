const Category = require('../models/category.model')

const category = [];

exports.getAll = (req, res) => {
    res.status(200).send(category);
};

exports.add = (req, res) => {
    console.log(req.body);
    const newCategory = new Category(req.body.id, req.body.name, req.body.quantity);
    category.push(newCategory);
    res.status(201).send(newCategory);
}

exports.update = (req, res) => {
    console.log(req.body);
    const updateCategory = new Category(req.body.id, req.body.name, req.body.quantity);
    const categoryIndex = category.findIndex((cat) => cat.id === req.body.id);
    category.splice(categoryIndex, 1, updateCategory);
    res.status(200).send(updateCategory);
}

exports.delete = (req, res) => {
    console.log(req.params.id);
    const categoryIndex = category.findIndex((cat) => cat.id === req.param.id)
    const deleted = category.splice(categoryIndex, 1)
    res.status(200).send(deleted)
}
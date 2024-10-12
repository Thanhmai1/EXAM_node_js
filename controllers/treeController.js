const Tree = require('../models/tree');

exports.getTrees = async (req, res) => {
    try {
        const trees = await Tree.find();
        res.render('index', { trees });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.createTreeForm = (req, res) => {
    res.render('create');
};

exports.createTree = async (req, res) => {
    const { treeName, description, imagePath } = req.body;
    try {
        const newTree = new Tree({ treeName, description, imagePath });
        await newTree.save();
        res.redirect('/trees');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.editTreeForm = async (req, res) => {
    try {
        const tree = await Tree.findById(req.params.id);
        if (!tree) {
            return res.status(404).send('Tree not found');
        }
        res.render('edit', { tree });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.editTree = async (req, res) => {
    const { treeName, description, imagePath } = req.body;
    try {
        await Tree.findByIdAndUpdate(req.params.id, { treeName, description, imagePath });
        res.redirect('/trees');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.deleteTree = async (req, res) => {
    try {
        await Tree.findByIdAndDelete(req.params.id);
        res.redirect('/trees');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

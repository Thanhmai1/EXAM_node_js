const mongoose = require('mongoose');

const TreeSchema = new mongoose.Schema({
    treeName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Shop', TreeSchema);

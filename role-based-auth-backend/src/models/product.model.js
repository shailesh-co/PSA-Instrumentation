const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },  // Stores image filename
    content: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);

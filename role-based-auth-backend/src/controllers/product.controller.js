const Product = require('../models/product.model');

// Add a new product
exports.addProduct = async (req, res) => {
    try {
        const { name, description, price, content } = req.body;
        const image = req.file ? req.file.filename : null;  // Store image filename

        if (!image) return res.status(400).json({ message: "Image is required" });

        const newProduct = new Product({ name, description, price, image, content });
        await newProduct.save();
        res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


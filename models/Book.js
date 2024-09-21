const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publishedDate: Date,
    isbn: String,
});

module.exports = mongoose.model('Book', bookSchema);
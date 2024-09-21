const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Get all books
router.get('/', async (req, res) => {
    const books = await Book.find();
    res.render('books', { books });
});

// Add a new book (GET)
router.get('/add', (req, res) => {
    res.render('addBook');
});

// Add a new book (POST)
router.post('/add', async (req, res) => {
    const { title, author, publishedDate, isbn } = req.body;
    const newBook = new Book({ title, author, publishedDate, isbn });
    await newBook.save();
    res.redirect('/books');
});

module.exports = router;
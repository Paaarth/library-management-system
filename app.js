const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const bookRoutes = require('./routes/books');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (replace 'your_db_uri' with your actual MongoDB URI)
mongoose.connect('your_db_uri', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({ secret: 'librarysecret', resave: false, saveUninitialized: true }));

// Routes
app.use('/books', bookRoutes);

// Home Route
app.get('/', (req, res) => {
    res.render('index');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
const mongoose = require('mongoose');
const Image = require('./models/image');

// connect the  database
mongoose.connect('mongodb://localhost/images');

module.exports = Image
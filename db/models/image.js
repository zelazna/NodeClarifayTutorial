const mongoose = require('mongoose');

// build the schema
const imageSchema = mongoose.Schema({
    path: String,
    tags: [String]
});

// compile the schema into a model
const Image = mongoose.model('Image', imageSchema);

module.exports = Image
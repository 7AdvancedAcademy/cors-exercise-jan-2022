const mongoose = require('mongoose');

const postschema = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    location: String,
    program: String,
    sex: String,
    date: String
}, {
    collection: 'Posts'
})

const model = mongoose.model('postmodel', postschema)


module.exports = model
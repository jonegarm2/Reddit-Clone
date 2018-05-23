const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String, 
    votes: Number,
})

module.exports = commentSchema
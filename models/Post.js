const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comment = require('./Comment');

const PostSchema = new Schema({
    title: String,
    content: String, 
    thumbnail_image_url: String,
    votes: Number,
    comments: [Comment]
})

module.exports = mongoose.model("Post", PostSchema);
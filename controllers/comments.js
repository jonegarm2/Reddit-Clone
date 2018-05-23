const Comment = require('./../models/Comment');

function create(req, res) {
    Comment.create(req.body)
    .then(comment => {
      res.status(200).json(post)
    })
    .catch(err => {
      res.status(500).json({err: err})
    });
}

function update(req, res) {
    Comment.findByIdAndUpdate(req.params.id, req.body)
    .then(comment => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(500).json({error: err});
    })
}

function destroy(req, res) {
    Comment.findByIdandRemove(req.params.id)
    .then(comment => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(500).json({error: err});
    })
}

module.exports = {
    create, 
    update, 
    destroy
};
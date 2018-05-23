const Post = require('./../models/Post');

function index(req, res) {
  Post.find({}, function(err, posts) {
    if (err) {
      res.send(err);
      return;
    }
    res.json(posts);
  });
}

function create(req, res) {
  Post.create(req.body)
  .then(post => {
    res.status(200).json(post)
  })
  .catch(err => {
    res.status(500).json({err: err})
  });
}

function show(req, res) {
  Post.findById(req.params.id)
  .then(post => {
    res.status(200).json(post)
  })
  .catch(err => {
    res.status(500).json({err: err})
  });
}
//This will probably not work ????

function update(req, res) {
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(500).json({error: err});
    })
}

function destroy(req, res) {
  Post.findByIdandRemove(req.params.post_id)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(500).json({error: err});
    })
}

module.exports = {
    index, 
    create, 
    show, 
    update, 
    destroy
};
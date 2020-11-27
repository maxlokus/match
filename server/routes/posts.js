const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (e) {
    res.json({ message: e});
  }
});

// router.get('/specific', (req, res) => {
//   res.send('specific posts');
// });


//submit a post
router.post('/', async (req,res) => {
  console.log(req.body)
  const post = new Post({
    title:req.body.title,
    description:req.body.description
  });
  console.log(post);
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (e) {
    res.json({ message: e});
  }
});
//get specific post
router.get('/:postId', async (req, res) => {
  // console.log(req.params.postId);
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (e) {
    res.json({message: e});
  }
})

module.exports = router;
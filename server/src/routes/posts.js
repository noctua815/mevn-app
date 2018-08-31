const express = require('express');
const router = express.Router();
const Post = require('../models/post-model');

router.post('/posts', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    post.save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send({
                success: true,
                message: `Post with ID_${data._id} saved successfully!`
            })
        }
    })
})

// module.exports = Post;
const Post = require('../models/posts')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// Get all posts:
async function all (req, res) {
    try {
        const post = await Post.find()
        res.json(post)
    } catch (error) {
        res.json({message : error.message})
    }
}

// Create new post:
async function createOne (req, res) {
    const post = new Post({
        title : req.body.title,
        desc : req.body.desc,
        user_id : req.body.user_id,
        is_valid : req.body.is_valid,
        stat_post : req.body.stat_post,
        createdAt : req.body.createdAt,
        tag : req.body.tag
    })
    try {
        const newPost = await post.save()
        res.json(newPost)
    } catch (err) {
        res.json({message : err.message})
    }
}

// Edit a post :
async function edit (req, res) {
    if(!req.body){
        return res.send({message : "they is not data !!!"})
    }
    const id = req.params.id
    Post.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.send({
              message: `they is no post !`
            });
          } else {
            res.send({ message: "post is updated successfully." })
          }
    })
}

// delete post by ID :
async function deletePost (req, res) {
    Post.findByIdAndDelete(req.params.id).then( () => {
        res.json()
    })
}

module.exports = {
    all,
    createOne,
    edit,
    deletePost
}
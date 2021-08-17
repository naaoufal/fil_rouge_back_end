const Tags = require('../models/tags')
require('dotenv').config()

// get all tags :
async function all (req, res) {
    try {
        const tags = await Tags.find()
        res.json(tags)
    } catch (error) {
        res.json({message : error.message})
    }
}

// get all tags for public api :
async function allTags (req, res) {
    try {
        const tags = await Tags.find()
        res.json(tags)
    } catch (error) {
        res.json({
            message : error.message
        })
    }
}

// Create new tag:
async function createOne (req, res) {
    const tag = new Tags({
        name : req.body.name,
        desc : req.body.desc
    })
    try {
        const newTag = await tag.save()
        res.json(newTag)
    } catch (err) {
        res.json({message : err.message})
    }
}

// Edit a tag :
async function edit (req, res) {
    if(!req.body){
        return res.send({message : "they is not data !!!"})
    }
    const id = req.params.id
    Tags.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        //console.log(data.email)
        if (!data) {
            res.send({
              message: `they is no tag !`
            });
          } else {
            res.send({ message: "tag is updated successfully." })
          }
    })
}

// delete Tag :
async function deleteTag (req, res) {
    Tags.findByIdAndDelete(req.params.id).then( () => {
        res.json()
    })
}

module.exports = {
    all,
    createOne,
    edit,
    deleteTag,
    allTags
}
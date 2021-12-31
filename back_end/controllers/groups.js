const Group = require('../models/groups')
require('dotenv').config()

// Get all Group :
async function all (req, res) {
    try {
        const group = await Group.find()
        res.json(group)
    } catch (error) {
        res.json({message : error.message})
    }
}

// Create new Group :
async function createOne (req, res) {
    const group = new Group({
        groupName : req.body.groupName,
        groupOwner : req.body.groupOwner,
        groupMessage : req.body.groupMessage,
        groupReciever : req.body.groupReciever
    })
    try {
        const newGroup = await group.save()
        res.json(newGroup)
    } catch (error) {
        res.json({message : error.message})
    }
}

// Edit on existed group : 
async function edit (req, res) {
    if(!req.body){
        return res.send({message : "They is no Data to edit"})
    }
    const id = req.params.id
    Group.findByIdAndUpdate(id, req.body, { userFindAndModify: false }).then(data => {
        if(!data) {
            res.send({
                message : "they is no group !"
            })
        } else {
            res.send({message : "Group updated successfully"})
        }
    })
}

module.exports = {
    all,
    createOne,
    edit
}
const Staffs = require('../models/staffs')
require('dotenv').config()
const jwt = require('jsonwebtoken')

// get all stuffs :
async function all (req, res) {
    try {
        const staffs = await Staffs.find()
        res.json(staffs)
    } catch (error) {
        res.json({message : error.message})
    }
}

// Create new staff :
async function createOne (req, res) {
    const staff = new Staffs({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        gender : req.body.gender,
        email : req.body.email,
        adress : req.body.adress,
        phone : req.body.phone,
        password : req.body.password,
        birth : req.body.birth,
        is_reseted : req.body.is_reseted,
        suspended : req.body.suspended
    })
    try {
        const newStaff = await staff.save()
        res.json(newStaff)
    } catch (err) {
        res.json({message : err.message})
    }
}

// Edit a staff :
async function edit (req, res) {
    if(!req.body){
        return res.send({message : "they is not data !!!"})
    }
    const id = req.params.id
    Staffs.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        //console.log(data.email)
        if (!data) {
            res.send({
              message: `they is no staff !`
            });
          } else {
            res.send({ message: "staff is updated successfully." })
          }
    })
}

// delete Tag :
async function deleteStaff (req, res) {
    Staffs.findByIdAndDelete(req.params.id).then( () => {
        res.json()
    })
}

// auth a staff (Json Web Token) :
async function login (req, res, next) {
    const {email, password} = req.body
    Staffs.findOne({
        email : email,
        password : password
    }).then(staff => {
        if(!staff){
            res.json({message : "You re Not Allowed"})
        } else {
            const email = req.body.email
            const password = req.body.password
            const ad = {ademail : email, adpassword : password}
            const accessToken = jwt.sign(ad, process.env.ACCESS_TOKEN_STAFF)
            res.json({accessToken : accessToken})
            res.ad = ad
            next()
        }
    })
}

module.exports = {
    all,
    createOne,
    edit,
    deleteStaff,
    login
}
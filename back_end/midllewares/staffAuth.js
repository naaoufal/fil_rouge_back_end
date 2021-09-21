require('dotenv').config()
const jwt = require('jsonwebtoken')
const Staff = require('../models/staffs')

module.exports = function auth (req, res, next) {
    const autHeader = req.headers['authorization']
    const token = autHeader && autHeader.split(' ')[1]
  
    if(token == null){
        return res.sendStatus(403)
    }
  
    const code = jwt.verify(token, process.env.ACCESS_TOKEN_STAFF)
    const staff = Staff.findById(code.id)

    if(!staff){
        return res.sendStatus(404)
    }
    req.staff = staff
    next()
}

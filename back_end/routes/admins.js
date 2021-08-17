const express = require("express")
const router = express.Router()
const adminCon = require("../controllers/admins")
const access = require('../midllewares/authAdmin')

router.get("/all", access, adminCon.all)

router.post("/add", access, adminCon.createOne)

router.post("/Auth", adminCon.login)

module.exports = router
const express = require("express")
const router = express.Router()
const staffCon = require("../controllers/staffs")
const access = require('../midllewares/staffAuth')

router.get("/all", access, staffCon.all)

router.post("/add", access, staffCon.createOne)

router.post("/authStatff", staffCon.login)

router.patch("/edit/:id", access, staffCon.edit)

router.delete("/delete/:id", access, staffCon.deleteStaff)

module.exports = router
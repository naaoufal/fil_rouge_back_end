const express = require("express")
const router = express.Router()
const staffCon = require("../controllers/staffs")
const access = require('../midllewares/staffAuth')

router.get("/all", staffCon.all)

router.post("/add", staffCon.createOne)

router.post("/authStatff", staffCon.login)

router.patch("/edit/:id", staffCon.edit)

router.delete("/delete/:id", staffCon.deleteStaff)

module.exports = router
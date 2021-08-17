const express = require("express")
const router = express.Router()
const postCon = require("../controllers/posts")
//const access = require('../midllewares/authAdmin')

router.get("/all", postCon.all)

router.post("/add", postCon.createOne)

router.patch("/edit/:id", postCon.edit)

router.delete("/delete/:id", postCon.deletePost)

module.exports = router
const express = require("express")
const router = express.Router()
const tagCon = require("../controllers/tags")
const access = require('../midllewares/authAdmin')

router.get("/all", access, tagCon.all)

router.get("/publicTags", tagCon.allTags)

router.post("/add", access, tagCon.createOne)

router.patch("/edit/:id", tagCon.edit)

router.delete("/delete/:id", tagCon.deleteTag)

module.exports = router
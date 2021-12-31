const express = require("express")
const router = express.Router()
const groupCon = require("../controllers/groups")

// public apis :

router.get("/all", groupCon.all)

router.post("/add", groupCon.createOne)

module.exports = router
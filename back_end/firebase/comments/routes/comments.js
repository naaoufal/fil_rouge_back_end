const express = require("express")
const router = express.Router()

const commentController = require("../controller/comments")

// router.get("/all", access, commentController.add)

router.post("/addComment", commentController.addComment)

module.exports = router

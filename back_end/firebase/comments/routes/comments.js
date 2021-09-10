const express = require("express")
const router = express.Router()

const commentController = require("../controller/comments")

router.get("/allComments", commentController.getComment)

router.post("/addComment", commentController.addComment)

module.exports = router

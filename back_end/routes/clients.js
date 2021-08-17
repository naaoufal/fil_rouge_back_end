const express = require("express")
const router = express.Router()
const clientCon = require("../controllers/clients")
const access = require('../midllewares/authClient')
const multer = require('multer')

// multer config :
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../2eme/front_end/public/images')
    },
    filename : function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
})

const upload = multer({storage : storage})


router.get("/all", access, clientCon.all)

router.post("/auth", clientCon.login)

router.get("/oneClient", clientCon.findClient)

router.post("/add", upload.single('image'), clientCon.createOne)

router.delete("/delete/:id", clientCon.deleteClient)

module.exports = router
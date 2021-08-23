const express = require("express");
const cors = require('cors');
require("dotenv").config();
const connectDB = require("./back_end/config/mongodb");
const app = express();
const http = require('http');
const server = http.createServer(app)
// init socket :
const socket = require("socket.io");
const io = socket(server)

// connect to database with mongodb:
connectDB()

app.use(express.json())
app.use(cors())

// socket io config :
io.on("connection", socket => {
    socket.emit('ID', socket.id)
    //socket.emit('firstname', socket.name)
    socket.on("send message", body => {
        io.emit("message", body)
    })
})


// declaring url endpoints :
app.use("/api/admins", require("./back_end/routes/admins"))
app.use("/api/tags", require("./back_end/routes/tags"))
app.use("/api/staffs", require("./back_end/routes/staffs"))
app.use("/api/clients", require("./back_end/routes/clients"))
app.use("/api/posts", require("./back_end/routes/posts"))


// start the server
server.listen(3001, () => {console.log("the server is started")});
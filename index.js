const express = require("express");
const cors = require('cors');
require("dotenv").config();
const connectDB = require("./back_end/config/mongodb");
const app = express();
const http = require('http');
const server = http.createServer(app)

// connect to database with mongodb:
connectDB()

app.use(express.json())
app.use(cors())

// declaring url endpoints :
app.use("/api/admins", require("./back_end/routes/admins"))
app.use("/api/tags", require("./back_end/routes/tags"))
app.use("/api/staffs", require("./back_end/routes/staffs"))
app.use("/api/clients", require("./back_end/routes/clients"))
app.use("/api/posts", require("./back_end/routes/posts"))
app.use("/api/comments", require("./back_end/firebase/comments/routes/comments"))


// start the server
server.listen(3001, () => {console.log("the server is started")});
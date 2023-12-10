const express = require('express');
const app = express();
const router = require("./src/routes/api")
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const mongoSanitize = require('express-mongo-sanitize');
const { rateLimit } = require('express-rate-limit')
const helmet = require('helmet');
const hpp = require('hpp');
const mongoose = require("mongoose");


const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)

})

//Security Middleware
app.use(limiter)
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use(mongoSanitize())
app.use(helmet())
app.use(hpp())

let URI = `mongodb://127.0.0.1:27017/Assignment_17`
let OPTION = { user: "", pass: "", autoIndex: true }
mongoose
	.connect(URI, OPTION)
	.then(() => console.log("Database is Connected ."))
	.catch((err) => console.log(err))

app.use("/api/v1", router);




//Root Route
app.get("/", (req, res) => {
	res.send("Server is Running")
})


//Undefined routing :
app.use("*", (req, res) => {
	res.status(404).json({ status: "fail", data: "No route found" });
});

module.exports = app;





module.exports = app;

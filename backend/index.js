const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const routes = require("./routes/index");

const app = express();
const PORT = 8000;

dotenv.config();
app.use(cors());

app.use("/api/v1/", routes);

app.use("/", (req, res) => {
    res.send("Hello world")
})

app.listen(PORT);
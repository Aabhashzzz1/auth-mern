// import body-parser express mongoose
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

//initialize express
const app = express();

//applying middleware functions on body-parser
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

// pull mongoURI from keys.js
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connection successfully"))
  .catch((err) => console.log(err));

// set a port to run the server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

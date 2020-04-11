// Dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Setting up Express App
const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));
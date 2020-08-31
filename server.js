const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
var http = require("http");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
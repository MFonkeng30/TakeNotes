const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
var http = require("http");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Test 
// app.get("/", (request, response) => {
//     response.send("Test!");
// })

// Get/notes - needs to return notes.html
app.get("/notes", (request, response) => {

    response.sendFile(path.join(__dirname, "public", "notes.html"));
    console.log("Your Notes!");
})

// Get * - needs to return index.html (?)
app.get("/", (request, response) => {
    // response.sendFile(path.join(__dirname, "..", "..", "index.html"));
    response.sendFile(path.join(__dirname, "public", "index.html"));
    console.log("Your index!");
})

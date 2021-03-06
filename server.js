const express = require("express");
const app = express();


// Sets the port
var PORT = process.env.PORT || 3001;

// Sets the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//routes from server to user
require("./routing/apiroutes.js")(app);
require("./routing/htmlroutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
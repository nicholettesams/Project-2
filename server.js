const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("app/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.

const htmlRoutes = require("./app/routes/htmlRoutes.js");
const apiRoutes = require("./app/routes/apiRoutes.js");
const findMateRoutes = require("./app/routes/findMateRoutes.js");
const animals = require("./app/routes/animals.js");


app.use(htmlRoutes);
app.use(apiRoutes);
app.use(findMateRoutes);
app.use(animals);



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

const Express = require("express");
const dotenv = require("dotenv");
const connectToDatabase = require("./config/db");

dotenv.config();

const app = Express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectToDatabase();

// Middleware to parse JSON bodies
app.use(Express.json());

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello Chichat");
});

// Start the server
app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});

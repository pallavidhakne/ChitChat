const Express = require("express");
const dotenv = require("dotenv");
const connectToDatabase = require("./config/db");
const colors = require("colors");

const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = Express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectToDatabase();

// Middleware to parse JSON bodies
app.use(Express.json());

//end points
app.use("/api/user", userRoutes);
// Define a basic route
app.get("/", (req, res) => {
  res.send("Api is running successfully");
});

// Start the server
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`.yellow.bold);
});

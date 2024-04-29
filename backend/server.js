import Express from "express";
import dotenv from "dotenv";
const app = Express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("server is running on port "));
app.get("/", (req, res) => {
  res.send("Helllo Chichat");
});

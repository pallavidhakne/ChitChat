import Express from "express";

const app = Express();
app.listen(5000, console.log("server is running on port "));
app.get("/", (req, res) => {
  res.send("Helllo Chichat");
});

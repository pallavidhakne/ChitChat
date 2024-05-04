const mongoose = require("mongoose");
const dotenv = require("dotenv");
//const chalk = require("chalk");
dotenv.config();
//console.log(process.env.MONGO_URI);
const uri =
  "mongodb+srv://chitchat:chitchat@cluster0.xdumdag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectToDatabase = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectToDatabase;

const mongoose = require("mongoose");
const dotenv = require("dotenv");
//const chalk = require("chalk");
dotenv.config();
const connectToDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectToDatabase;

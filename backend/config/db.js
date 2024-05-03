const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
dotenv.config();

const connectToDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB connected ${conn.connection.host}`,
      chalk.cyan.underline
    );
  } catch (err) {
    console.error(err.message.red.bold);
    process.exit(1);
  }
};

module.exports = connectToDatabase;

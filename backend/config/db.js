import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectToDatabase = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongodb connected ${conn.connection.host}`, cyan.underline);
  } catch (err) {
    console.error(`Error.message`.red.bold);
    process.exit(1);
  }
};
export default connectToDatabase;

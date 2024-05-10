import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // if the database is already connected, don't connect again
  if (connected) {
    console.log("MongoDB is already connected...");
    return;
  }

  // connect to mongoDb
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    connected = true;
    console.log("MongoDb connected...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;

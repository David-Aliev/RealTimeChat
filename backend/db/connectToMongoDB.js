import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("connected to mongodb");
  } catch (error) {
    console.log("Error connection to MongoDB", error.message);
  }
};

export default connectToMongoDb;

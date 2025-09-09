import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI); // Debug log
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected ");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

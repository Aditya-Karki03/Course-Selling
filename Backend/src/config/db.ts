import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  const dbUri: string = process.env.db_url || "";
  try {
    await mongoose.connect(dbUri);
    console.log("Connection to MongoDB successfull.");
  } catch (error) {
    console.error("Cannot connect to MongoDB", error);
    throw new Error("Cannot Connect to Database");
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("Disconnection Successfull.");
  } catch (error) {
    console.error("Unable to disconnect", error);
    throw new Error("Unable to disconnect. Please try again.");
  }
};

export { connectDB, disconnectDB };

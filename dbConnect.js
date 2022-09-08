import mongoose from "mongoose";

const { MONGODB_URL } = process.env;

export default async function dbConnect() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connected!");
  } catch (error) {
    console.log("Could not connect to DB");
    console.error(error);
  }
}

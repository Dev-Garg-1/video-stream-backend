import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("MongoDB connected:", connectionInstance.connection.host);
    }catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
}  // as this is a asynchronous function so it will return a promise

export default connectDB;
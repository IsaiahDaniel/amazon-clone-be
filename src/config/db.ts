import { connect } from "mongoose";

const connectDB = async () => {
    try {
        const conn = await connect(process.env.MONGO_URI);
        console.log(`MongoDB connected - ${conn.connection.host}`);
    } catch (err) {
        console.log("DB connection Error", err);
        process.exit(1);
    }
}

export default connectDB;
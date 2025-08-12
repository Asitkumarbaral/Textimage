import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("🔌 Connecting to MongoDB...");
    console.log("URI:", process.env.MONGODB_URI);

    // Set listeners BEFORE connect
    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err);
    });

    await mongoose.connect(process.env.MONGODB_URI);
      
   

  } catch (error) {
    console.error("❌ Initial MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;

import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGODB_URL || "").then(() => {
    console.log("database connected");
  });
};

dbConnect().catch((err) => console.log(err));

export default dbConnect;

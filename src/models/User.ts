import mongoose, { Schema } from "mongoose";
import { Usertype } from "@/types/User";

const userSchema = new Schema<Usertype>({
  fullName: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phone: { type: String, default: null },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User ||
  mongoose.model<Usertype>("User", userSchema);

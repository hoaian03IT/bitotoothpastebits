import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    }
);

export const userModel = new mongoose.model("user", userSchema);

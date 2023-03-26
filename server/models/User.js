import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    user: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 20
    },
    occupation: String,
    picture: String,
    birthDate: Date
  },
  { timestamps: true }
)

const User = mongoose.model("User", UserSchema)
export default User
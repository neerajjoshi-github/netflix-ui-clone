import { Schema, model, models } from "mongoose";

const profileSchema = new Schema({
  profileName: {
    type: String,
  },
  favorites: [String],
});

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      maxLength: [16, "Name cannot be longer than 16 character!"],
    },
    userEmail: {
      type: String,
      required: true,
      minLength: [2, "Enter a valid password"],
      maxLength: [25, "Email cannot be longer than 25 character!"],
    },
    userPassword: {
      type: String,
      required: true,
    },
    profiles: [profileSchema],
  },
  { timestamps: true }
);

export default models.User || model("User", userSchema);

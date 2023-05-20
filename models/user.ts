import { Schema, model, models, InferSchemaType } from "mongoose";

type FavoriteType = {
  id: string;
  mediaType: string;
};

type ProfileType = {
  profileName: string;
  favorites: FavoriteType[];
};

export type UserType = {
  userName: string;
  userEmail: string;
  userPassword: string;
  profiles: ProfileType[];
  createdAt: Date;
  updatedAt: Date;
};

const favoritesSchema = new Schema({
  id: String,
  mediaType: String,
});

const profileSchema = new Schema({
  profileName: {
    type: String,
  },
  favorites: [favoritesSchema],
});

const userSchema = new Schema<UserType>(
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

export default models.User || model<UserType>("User", userSchema);

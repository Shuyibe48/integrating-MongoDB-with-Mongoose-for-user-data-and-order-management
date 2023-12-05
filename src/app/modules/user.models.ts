import { Schema, model } from "mongoose";
import { TAddress, TFullName, TUser } from "./users/user.interfae";
import config from "../config";
import bcrypt from "bcrypt";

const FullNameSchema = new Schema<TFullName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const AddressSchema = new Schema<TAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const UserSchema = new Schema<TUser>({
  userId: {
    type: Number,
    required: [true, "User Id is required!"],
  },
  username: { type: String, required: [true, "User name is required!"] },
  password: { type: String, required: [true, "Password is required!"] },
  fullName: {
    type: FullNameSchema,
    required: [true, "Full Name is required!"],
  },
  age: { type: Number, required: [true, "Age is required!"] },
  email: { type: String, required: [true, "Email is required!"] },
  isActive: { type: Boolean, required: [true, "Status is required!"] },
  hobbies: { type: [String], required: [true, "Hobbies are required!"] },
  address: { type: AddressSchema, required: [true, "Address is required!"] },
});

UserSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  // To hash a password with bcrypt
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

// post save middleware/hook : will work on create() save()

UserSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

export const User = model<TUser>("User", UserSchema);

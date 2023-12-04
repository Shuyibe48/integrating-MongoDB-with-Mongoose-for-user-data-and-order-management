"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const FullNameSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
});
const AddressSchema = new mongoose_1.Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
});
const UserSchema = new mongoose_1.Schema({
    userId: {
        type: Number,
        required: [true, 'User Id is required!'],
    },
    username: { type: String, required: [true, 'User name is required!']
    },
    password: { type: String, required: [true, 'Password is required!'] },
    fullName: { type: FullNameSchema, required: [true, 'Full Name is required!'] },
    age: { type: Number, required: [true, 'Age is required!'] },
    email: { type: String, required: [true, 'Email is required!'] },
    isActive: { type: Boolean, required: [true, 'Status is required!'] },
    hobbies: { type: [String], required: [true, 'Hobbies are required!'] },
    address: { type: AddressSchema, required: [true, 'Address is required!'] },
});
exports.User = (0, mongoose_1.model)("User", UserSchema);

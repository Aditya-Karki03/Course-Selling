import mongoose, { mongo } from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    length: 8,
  },
  firstname: {
    type: String,
    trim: true,
    required: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
});
const adminSchema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    length: 8,
  },
  firstname: {
    type: String,
    trim: true,
    required: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
});
const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: String,
  courseCreatorId: {
    type: mongoose.Schema.ObjectId,
    ref: "adminSchema",
    required: true,
  },
});
const purchaseSchema = new Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "userSchema",
    required: true,
  },
  courseId: {
    type: mongoose.Schema.ObjectId,
    ref: "adminSchema",
    required: true,
  },
});

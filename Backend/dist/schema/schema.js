"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const userSchema = new mongoose_2.Schema({
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
const adminSchema = new mongoose_2.Schema({
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
const courseSchema = new mongoose_2.Schema({
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
        type: mongoose_1.default.Schema.ObjectId,
        ref: "adminSchema",
        required: true,
    },
});
const purchaseSchema = new mongoose_2.Schema({
    userId: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: "userSchema",
        required: true,
    },
    courseId: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: "adminSchema",
        required: true,
    },
});
//# sourceMappingURL=schema.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const courseController_1 = require("../controllers/courseController");
const courseRouter = express_1.default.Router();
const course = new courseController_1.courseController();
courseRouter.post("/purchase", course.coursePurchase);
courseRouter.get("/preview", course.coursePreview);
exports.default = courseRouter;
//# sourceMappingURL=course.js.map
import express from "express";
import { courseController } from "../controllers/courseController";
const courseRouter = express.Router();
const course = new courseController();

courseRouter.post("/purchase", course.coursePurchase);
courseRouter.get("/preview", course.coursePreview);

export default courseRouter;

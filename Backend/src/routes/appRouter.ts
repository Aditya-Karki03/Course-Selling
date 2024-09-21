import express from "express";
import { Request, Response } from "express";
import { userController } from "../controllers/userController";
import { courseController } from "../controllers/courseController";
const appRouter = express.Router();
const user = new userController();

appRouter.post("/login", user.verifyUser);

appRouter.post("/signup", user.createUser);

export default appRouter;

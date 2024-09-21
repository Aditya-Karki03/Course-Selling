import { Request, Response } from "express";

export class userController {
  async createUser(req: Request, res: Response) {
    res.json({
      msg: "user created successfully",
    });
  }
  async verifyUser(req: Request, res: Response) {
    res.json({
      msg: "User logged in successfully",
    });
  }
  async purchasedCourseByUser(req: Request, res: Response) {
    res.json({
      msg: "Sign-Up Endpoint",
    });
  }
}

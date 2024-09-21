import { Request, Response } from "express";

export class courseController {
  async coursePurchase(req: Request, res: Response) {
    res.json({
      msg: "Course Purchased Successfully",
    });
  }
  async coursePreview(req: Request, res: Response) {
    res.json({
      msg: "Course Preview Endpoint",
    });
  }
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const appRouter = express_1.default.Router();
const user = new userController_1.userController();
appRouter.post("/login", user.verifyUser);
appRouter.post("/signup", user.createUser);
exports.default = appRouter;
//# sourceMappingURL=appRouter.js.map
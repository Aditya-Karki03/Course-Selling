"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appRouter_1 = __importDefault(require("./routes/appRouter"));
const course_1 = __importDefault(require("./routes/course"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = 3000;
app.use("/user", appRouter_1.default);
app.use("/course", course_1.default);
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dburl = process.env.db_url || "";
mongoose_1.default.connect(dburl || "");
app.listen(port, () => {
    console.log("App is listening at port 3000");
});
//# sourceMappingURL=index.js.map
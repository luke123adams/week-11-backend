import express from "express";
import logger from "morgan";
import cors from "cors";

import christmasListRouter from "./routes/Christmaslist.js";

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/items", christmasListRouter);

export default app;

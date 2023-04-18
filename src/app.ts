import express from "express";
import cors from "cors";
//import BodyParser from "body-parser";

import router from "./routes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

app.listen(3000);

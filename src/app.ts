import express from "express";
import BodyParser from "body-parser";
import cors from "cors";

import router from "./routes";

const app = express();

app.use(BodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" }));

app.use(router);

app.listen(3000, () => {
  console.log("Ouvindo a porta 3000");
});

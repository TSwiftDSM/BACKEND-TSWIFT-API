import express from "express";
import path from "path";
//import BodyParser from "body-parser";

import router from "./routes";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(express.json());
app.use(router);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.listen(3000);
 
import express from "express";
import path from "path";
import BodyParser from "body-parser";

import router from "./routes";

const app = express();

app.use(BodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(router);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.locals.title = "Abel's Home Page"; // THIS LINE IS KEY
  res.render("home.ejs");
});

app.listen(3000);

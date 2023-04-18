import express from "express";
import BodyParser from "body-parser";
//import BodyParser from "body-parser";

import router from "./routes";

const app = express();

app.use(
    BodyParser.urlencoded(
        {extended: true}
    )
);

app.use(express.json());

app.use(router);

app.use(express.static("public"));

app.listen(3000, ()=>{
    console.log('Ouvindo a porta 3000')
});
 

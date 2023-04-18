import express from "express";
<<<<<<< Updated upstream
import BodyParser from "body-parser";
=======
import cors from "cors";
>>>>>>> Stashed changes
//import BodyParser from "body-parser";

import router from "./routes";

const app = express();

app.use(
<<<<<<< Updated upstream
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
 
=======
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

app.listen(3000);
>>>>>>> Stashed changes

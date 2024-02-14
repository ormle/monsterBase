import express from "express";
import bodyParser from "body-parser";
import monsters from "./routes/monster.route.js";

import { connectDB } from "./database/database.js";

const app = express();
const port = process.env.PORT || 2000;

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//routes
app.use("/", monsters);

app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
})


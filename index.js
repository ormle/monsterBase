import express from "express";
import bodyParser from "body-parser";
import monsters from "./routes/monster.route.js";
import axios from "axios";
import { connectDB } from "./database/database.js";

const app = express();
const port = 8000;
const monsterURL = "https://gist.githubusercontent.com/mrchenliang/e438f666d121261b74abcd70a5f938d8/raw/a8f14ee5097fe2ab4f78798307d2dd3dcb0dcd3a/monsters.json";


connectDB();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//routes
app.use("/monsters", monsters);

app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
})

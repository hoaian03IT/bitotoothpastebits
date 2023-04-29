import express from "express";
import * as dotenv from "dotenv";
import { connectToDB } from "./src/config/db.js";
import { routes } from "./src/routes/index.js";

const app = express();
const port = 3001;
dotenv.config();

// connect to mongooseDB
connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "100mb" }));

routes(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}/`);
});

import bodyParser from "body-parser";
import express from "express";
import { userIsQualified } from "./routes/isQualified";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/isQualified", userIsQualified);

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Listening on port ${port}`));

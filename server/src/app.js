import express from "express";
import cors from "cors";

const app = express();


app.use(cors({origin:process.env.ORIGIN_PORT, credentials: true}));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({extended: true, limit:"1mb"}));
// app.use(express.static("public"));

export { app };
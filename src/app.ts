import express from "express";
import cors from "cors";
import connectDatabase from "./database";
import "reflect-metadata";
import "./setup";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("OK!");
});

export default app;

export async function init () {
    await connectDatabase();
  }

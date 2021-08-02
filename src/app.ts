import express from "express";
import cors from "cors";
import connectDatabase from "./database";
import "reflect-metadata";
import "./setup";

import * as disciplineController from "./controllers/disciplineController";
import * as professorController from "./controllers/professorController";
import * as categoryController from "./controllers/categoryController";
import * as examController from "./controllers/examController";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("OK!");
});

app.get("/disciplines", disciplineController.sendDisciplines);
app.get("/professors", professorController.sendProfessors);
app.get("/categories", categoryController.sendCategories);
app.post("/exams", examController.newExam);
app.get("/disciplines/:id/exams", examController.sendExamByDiscipline);
app.get("/professors/:id/exams", examController.sendExamByProfessor);

export default app;

export async function init () {
    await connectDatabase();
  }

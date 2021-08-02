import { Request, Response } from "express";
import * as disciplineService from "../services/disciplineService";
import * as professorService from "../services/professorService";
import * as categoryService from "../services/categoryService";
import * as examService from "../services/examService";
import { send } from "process";

export async function newExam(req: Request, res: Response){
    try{
        
        const {name,url,categories,professor,disciplines} = req.body;

        if(!name || !url || !categories || !professor || !disciplines){
            return res.sendStatus(422);
        }

        const newExam = {
            name,
            url,
            categories,
            professor,
            disciplines 
        } 

        await examService.createExam(newExam);

        return res.sendStatus(200);
        
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

export async function sendExamByDiscipline(req: Request, res: Response) {
    try{
        const {id} = req.params;
        console.log(id)
        if(isNaN(Number(id))){
            return res.sendStatus(422);
        }

        const exams = await examService.getExamsByDiscipline(Number(id));
        console.log(exams);

        const result = await examService.complementExam(exams[0].exams[0].id);
        console.log(result)

        return res.send(result);

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export async function sendExamByProfessor(req: Request, res: Response) {
    try{
        const {id} = req.params;
        console.log(id);
        if(isNaN(Number(id))){
            return res.sendStatus(422);
        }

        const exams = await examService.getExamsByProfessor(Number(id));
        console.log(exams);

        const result = await examService.complementExam(exams[0].exams[0].id);
        console.log(result)
        
        return res.send(result);

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}
 
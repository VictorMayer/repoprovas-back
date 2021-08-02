import { Request, Response } from "express";
import * as disciplineService from "../services/disciplineService";

export async function sendDisciplines(req: Request, res: Response){
    try{

        const disciplines = await disciplineService.getDisciplines();

        return res.send(disciplines);
        
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}
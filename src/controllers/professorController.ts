import { Request, Response } from "express";
import * as professorService from "../services/professorService"


export async function sendProfessors(req: Request, res: Response){
    try{

        const professors = await professorService.getProfessors();

        return res.send(professors);
        
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}
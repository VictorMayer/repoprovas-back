import { Request, Response } from "express";
import * as categoryService from "../services/categoryService"

export async function sendCategories(req: Request, res: Response){
    try{

        const categories = await categoryService.getCategories();

        return res.send(categories);
        
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}
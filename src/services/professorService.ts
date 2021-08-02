import { getRepository } from "typeorm";
import Professor from "../entities/Professors";

export async function getProfessors(){
    
    const professors = await getRepository(Professor).find();
    
    return professors;
}

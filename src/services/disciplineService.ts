import { getRepository } from "typeorm";
import Disciplines from "../entities/Disciplines";
import Periods from "../entities/Periods";

export async function getDisciplines(){
    
    const disciplines = await getRepository(Periods).find({
        relations : ["disciplines"]
    });
    
    return disciplines;
}
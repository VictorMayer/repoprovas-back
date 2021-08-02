import { getRepository } from "typeorm";
import Categories from "../entities/Categories";

export async function getCategories(){
    
    const categories = await getRepository(Categories).find();
    
    return categories;
}

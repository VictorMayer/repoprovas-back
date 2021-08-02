import { getRepository } from "typeorm";
import Categories from "../entities/Categories";
import Disciplines from "../entities/Disciplines";
import Exams from "../entities/Exams";
import Professor from "../entities/Professors";

interface createExam {
    name: string;
    url: string;
    categories: Categories;
    professor: Professor;
    disciplines: Disciplines;
}

export async function createExam(newExam: createExam){
    
    const createdExam = getRepository(Exams).create(newExam);
    const result = await getRepository(Exams).save(createdExam);
    
    return result;
}

export async function getExamsByDiscipline(id:number) {
    
    const exams = await getRepository(Disciplines).find({ where: { id: id }, relations: ["exams"]});

    return exams; 
}


export async function getExamsByProfessor(id:number) {
    
    const exams = await getRepository(Professor).find({ where: { id: id }, relations: ["exams"]});
    
    return exams;
}

export async function complementExam(id : number) {
    
    const result = await getRepository(Exams).find({ where: { id: id}, relations: ["disciplines", "categories", "professor"]});

    return result;
}
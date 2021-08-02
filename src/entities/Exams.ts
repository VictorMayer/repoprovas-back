import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Categories from "./Categories";
import Disciplines from "./Disciplines";
import Professor from "./Professors";

@Entity('exams')
export default class Exams {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Column()
  url: string;

  @ManyToOne(()=> Disciplines, disciplines => disciplines.exams)
  disciplines: Disciplines;

  @ManyToOne(()=> Categories, categories => categories.exams)
  categories: Categories;

  @ManyToOne(()=> Professor, professor => professor.exams)
  professor: Professor;

}
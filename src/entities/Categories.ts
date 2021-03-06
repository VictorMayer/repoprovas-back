import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Exams from "./Exams";

@Entity('categories')
export default class Categories {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @OneToMany(()=> Exams, exams=> exams.categories)
  exams: Exams;
}
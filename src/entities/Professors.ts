import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import Disciplines from "./Disciplines";
import Exams from "./Exams";

@Entity('professors')
export default class Professor {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @OneToMany(()=> Exams, exams => exams.professor)
  exams: Exams[];

}
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany } from "typeorm";
import Exams from "./Exams";
import Periods from "./Periods";
import Professors from "./Professors";

@Entity('disciplines')
export default class Disciplines {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @OneToMany(()=> Exams, exams => exams.disciplines)
  exams: Exams[];

  @ManyToOne(()=> Periods, periods => periods.disciplines)
  periods: Periods;
  
}
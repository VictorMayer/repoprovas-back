import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Disciplines from "./Disciplines";

@Entity('periods')
export default class Periods {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @OneToMany(()=> Disciplines, disciplines => disciplines.periods)
  disciplines: Disciplines;
}
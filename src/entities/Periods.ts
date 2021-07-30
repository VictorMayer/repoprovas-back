import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('periods')
export default class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

}
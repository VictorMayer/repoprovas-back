import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('disciplines')
export default class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

}
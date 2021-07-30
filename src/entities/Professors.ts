import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('professors')
export default class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

}
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { DefaultDeserializer } from "v8";

@Entity('tests')
export default class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Column()
  disciplineId: number;
  
  @Column()
  professorId: number;

  @Column()
  categoryId: number;

  @Column()
  periodId: number;

}
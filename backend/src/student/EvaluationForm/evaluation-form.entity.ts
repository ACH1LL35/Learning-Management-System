import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('evaluation_form')
export class EvaluationForm {
  @PrimaryGeneratedColumn()
  FormID: number;

  @Column()
  FormName: string;

  @Column()
  Description: string;

  @Column()
  FormDate: Date;

  @Column()
  EvaluatedBy: string;

  @Column({ nullable: true })
  FilePath: string;
}

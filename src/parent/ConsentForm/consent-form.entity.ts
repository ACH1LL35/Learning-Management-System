import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('consent_form')
export class ConsentForm {
  @PrimaryGeneratedColumn()
  FormID: number;

  @Column()
  FormName: string;

  @Column()
  Description: string;

  @Column()
  FormDate: Date;

  @Column()
  CollectedBy: string;

  @Column({ nullable: true })
  FilePath: string;
}

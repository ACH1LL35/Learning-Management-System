import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ConsentForm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileName: string;

  @Column()
  filePath: string;
}

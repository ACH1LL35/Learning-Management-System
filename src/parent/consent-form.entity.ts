import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ConsentForm {
  @PrimaryGeneratedColumn()
  ConsentFormID: number;

  @Column()
  FileName: string;

  @Column({ type: 'timestamp' })
  UploadDate: Date;

  @Column({ nullable: true })
  FilePath: string;
}

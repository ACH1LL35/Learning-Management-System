import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Reporting {
  @PrimaryGeneratedColumn()
  ReportID: number;

  @Column()
  ReportName: string;

  @Column()
  Description: string;

  @Column()
  ReportDate: Date;

  @Column()
  GeneratedBy: string;

  @Column({ nullable: true })
  FilePath: string;
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FAQ {
  @PrimaryGeneratedColumn()
  FAQID: number;

  @Column()
  Question: string;

  @Column()
  Answer: string;

  @Column()
  Category: string;
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Course } from '../course.entity'; 

@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  ContentID: number;

  @ManyToOne(() => Course, { eager: true }) 
  @JoinColumn({ name: 'CourseID' })
  Course: Course;

  @Column()
  ContentTitle: string;

  @Column()
  ContentDescription: string;

  @Column()
  ContentType: string;
}

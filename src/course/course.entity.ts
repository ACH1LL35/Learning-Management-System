import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Instructor } from '../instructor/instructor.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  CourseID: number;

  @Column()
  CourseName: string;

  @Column()
  Description: string;

  @ManyToOne(() => Instructor)
  @JoinColumn({ name: 'InstructorID' })
  InstructorID: Instructor;

  @Column()
  EnrollmentDate: Date;

  @Column()
  CourseStatus: string;
}

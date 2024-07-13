import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Course } from '../course/course.entity';

@Entity()
export class Instructor {
  @PrimaryGeneratedColumn()
  InstructorID: number;

  @Column()
  Fname: string;

  @Column()
  Lname: string;

  @Column()
  Email: string;

  @Column()
  Mobile: string;

  @Column()
  Gender: string;

  @Column()
  DOB: Date;

  @Column()
  Address: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  RegistrationDate: Date;

  @OneToMany(() => Course, course => course.InstructorID)
  courses: Course[];
}

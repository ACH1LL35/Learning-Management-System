import { Column, Entity, OneToMany, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from '../user/user.entity';
import { Course } from '../course/course.entity';
import { IsNotEmpty } from "class-validator";

@Entity("student")
export class studentProfile {
  @PrimaryGeneratedColumn()
  StudentID: number;

  @Column()
  Fname: string;

  @Column()
  Lname: string;

  @Column()
  DOB: Date;

  @Column()
  Email: string;

  @Column()
  Mobile: string;

  @Column()
  Gender: string;

  @Column()
  Address: string;

  @IsNotEmpty()
  @OneToOne(() => User)
  @JoinColumn({ name: 'UserID' })
  user: User;
}


@Entity('course_enrollments')
export class CourseEnrollments {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'UserID' })
  user: User;

  @ManyToOne(() => Course)
  @JoinColumn({ name: 'CourseID' })
  course: Course;
}

@Entity()
export class Wishlist {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'UserID' })
  user: User;

  @ManyToOne(() => Course)
  @JoinColumn({ name: 'CourseID' })
  course: Course;
}

@Entity()
export class Payments {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'UserID' })
  user: User;

  @Column()
  Amount: number;

  @Column()
  PaymentType: string;
}

@Entity()
export class Submissions {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'UserID' })
  user: User;

  @Column()
  SubmissionContent: string;
}

@Entity()
export class Achievements {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'UserID' })
  user: User;

  @Column()
  AchievementType: string;
}

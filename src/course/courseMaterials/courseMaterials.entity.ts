import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Course } from '../course.entity';
import { Content } from '../contentApproval/contentApproval.entity';

@Entity()
export class CourseMaterial {
  @PrimaryGeneratedColumn()
  MaterialID: number;

  @ManyToOne(() => Course, course => course.CourseID)
  @JoinColumn({ name: 'CourseID' })
  course: Course;

  @ManyToOne(() => Content, contentApproval => contentApproval.ContentID)
  @JoinColumn({ name: 'ContentID' })
  contentApproval: Content;

  @Column()
  ContentTitle: string;

  @Column()
  ContentDescription: string;

  @Column()
  ContentType: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  UploadDate: Date;
}

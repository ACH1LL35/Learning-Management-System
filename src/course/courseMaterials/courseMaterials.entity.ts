import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Course } from '../course.entity';
import { ContentApproval } from '../contentApproval/contentApproval.entity';

@Entity()
export class CourseMaterial {
  @PrimaryGeneratedColumn()
  MaterialID: number;

  @ManyToOne(() => Course, course => course.CourseID)
  @JoinColumn({ name: 'CourseID' })
  course: Course;

  @ManyToOne(() => ContentApproval, contentApproval => contentApproval.ContentID)
  @JoinColumn({ name: 'ContentID' })
  contentApproval: ContentApproval;

  @Column()
  ContentTitle: string;

  @Column()
  ContentDescription: string;

  @Column()
  ContentType: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  UploadDate: Date;
}

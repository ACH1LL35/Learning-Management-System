import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Course } from '../course.entity';
import { ContentApproval } from '../contentApproval/contentApproval.entity';

@Entity()
export class CourseMaterial {
  @PrimaryGeneratedColumn()
  MaterialID: number;

  @ManyToOne(() => Course, { eager: true })
  @JoinColumn({ name: 'CourseID' })
  course: Course;

  @ManyToOne(() => ContentApproval, { eager: true })
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

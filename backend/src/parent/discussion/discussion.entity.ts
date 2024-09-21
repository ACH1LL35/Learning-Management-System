import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn,JoinColumn } from 'typeorm';
import { User } from '../../user/user.entity';
import { DiscussionComment } from '../discussion-comment/discussion-comment.entity';

@Entity()
export class Discussion {
  @PrimaryGeneratedColumn()
  dID: number;

  @Column()
  dtopic: string;

  @Column()
  dDesc: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_posted: Date;

  @Column({ nullable: true })
  edited: boolean;

  @CreateDateColumn({ nullable: true })
  last_edited: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'posted_By' })
  posted_By: User;

  @OneToMany(() => DiscussionComment, (comment) => comment.discussion)
  comments: DiscussionComment[];
}

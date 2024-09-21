import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/user/user.entity';
import { Discussion } from '../discussion/discussion.entity';
import { DiscussionComment } from '../discussion-comment/discussion-comment.entity';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Discussion, { nullable: true })
  @JoinColumn({ name: 'discussionId' })
  discussion: Discussion;

  @ManyToOne(() => DiscussionComment, { nullable: true })
  @JoinColumn({ name: 'commentId' })
  comment: DiscussionComment;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'posted_By' })
  postedBy: User;

  @Column({ nullable: true })
  type: string; // 'discussion' or 'comment'

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  datePosted: Date;
}
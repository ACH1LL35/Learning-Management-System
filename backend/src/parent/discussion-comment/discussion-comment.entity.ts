import { Entity,PrimaryGeneratedColumn,Column,ManyToOne,JoinColumn,CreateDateColumn} from 'typeorm';
import { User } from '../../user/user.entity';
import { Discussion } from '../discussion/discussion.entity';

@Entity()
export class DiscussionComment {
  @PrimaryGeneratedColumn()
  dcID: number;

  @ManyToOne(() => Discussion)
  @JoinColumn({ name: 'dID' })
  discussion: Discussion;

  @Column()
  dcComment: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_posted: Date;

  @Column({ nullable: true })
  edited: boolean;

  @Column({ nullable: true })
  last_edited: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'posted_By' })
  posted_By: User;
}

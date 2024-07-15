import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  FeedbackID: number;

  @ManyToOne(() => User, { eager: true }) 
  @JoinColumn({ name: 'UserID' })
  User: User;

  @Column()
  FeedbackContent: string;

  @Column()
  FeedbackDate: Date;
}

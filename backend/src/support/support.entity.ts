// support.entity.ts

import { User } from 'src/user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Support {
  @PrimaryGeneratedColumn()
  SupportID: number;

  @ManyToOne(() => User, { eager: true }) 
  @JoinColumn({ name: 'UserID' })
  User: User;

  @Column()
  IssueType: string;

  @Column()
  IssueDescription: string;

  @Column({ nullable: true })
  Resolution: string;

  @Column()
  SupportDate: Date;
}
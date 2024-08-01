// child-management.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity()
export class ChildManagement {
  @PrimaryGeneratedColumn()
  cid: number;

  @Column()
  date_added: Date;

  @Column()
  @JoinColumn({ name: 'StudentID' })
  StudentID: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'ParentID' })
  Parent: User;
}
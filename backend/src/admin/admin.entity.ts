import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  AdminID: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'UserID' })
  User: User;

  @Column()
  Fname: string;

  @Column()
  Lname: string;

  @Column()
  Email: string;

  @Column()
  Mobile: string;

  @Column()
  Gender: string;

  @Column()
  DOB: Date;

  @Column()
  Address: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  RegistrationDate: Date;
}

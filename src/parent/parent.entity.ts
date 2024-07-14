import { User } from 'src/user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,JoinColumn } from 'typeorm';

@Entity()
export class Parent {
  @PrimaryGeneratedColumn()
  ParentsID: number;

  @Column({ nullable: true })
  StudentID: number;

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
  Password: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  RegistrationDate: Date;

  
}
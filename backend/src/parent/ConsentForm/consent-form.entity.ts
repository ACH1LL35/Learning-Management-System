import { User } from 'src/user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('consent_form')
export class ConsentForm {
  @PrimaryGeneratedColumn()
  FormID: number;

  @Column()
  FormName: string;

  @Column()
  Description: string;

  @Column()
  FormDate: Date;

  @Column()
  CollectedBy: string;

  @Column({ nullable: true })
  FilePath: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'UserID' })
  user: User;

  @Column()
  UserID: number;
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  UserID: number;

  @Column()
  UserType: string;

  @Column()
  Username: string;

  @Column()
  Password: string;
}

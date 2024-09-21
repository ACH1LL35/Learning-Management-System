import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  EventID: number;

  @Column()
  EventName: string;

  @Column()
  Description: string;

  @Column()
  EventDate: Date;

  @Column()
  Location: string;
}

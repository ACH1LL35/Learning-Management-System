import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';
import { CreateEventDto, UpdateEventDto } from './event.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const event = this.eventRepository.create(createEventDto);
    return this.eventRepository.save(event);
  }

  async findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  async findOne(EventID: number): Promise<Event> {
    const event = await this.eventRepository.findOne({where:{EventID:EventID}});
    if (!event) {
      throw new NotFoundException(`Event with ID ${EventID} not found`);
    }
    return event;
  }

  async update(EventID: number, updateEventDto: UpdateEventDto): Promise<Event> {
    const event = await this.findOne(EventID);
    Object.assign(event, updateEventDto);
    return this.eventRepository.save(event);
  }

  async delete(EventID: number): Promise<void> {
    const event = await this.findOne(EventID);
    await this.eventRepository.remove(event);
  }
}

import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
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

  async update(eventId: number, updateEventDto: UpdateEventDto, userType: string): Promise<Event> {
    const event = await this.eventRepository.findOne({where:{EventID:eventId}});

    if (!event) {
      throw new BadRequestException(`Event with ID ${eventId} not found`);
    }

    if (userType !== 'Admin' && userType !== 'Instructor') {
      throw new UnauthorizedException('You must be logged in as an admin or instructor to update event details');
    }

    Object.assign(event, updateEventDto);
    return this.eventRepository.save(event);
  }

  async delete(eventId: number, userType: string): Promise<void> {
    const event = await this.eventRepository.findOne({where:{EventID:eventId}});

    if (!event) {
      throw new BadRequestException(`Event with ID ${eventId} not found`);
    }

    if (userType !== 'Admin') {
      throw new UnauthorizedException('You must be logged in as an admin to delete events');
    }

    await this.eventRepository.remove(event);
  }

  async getAllEvents(): Promise<Event[]> {
    return this.eventRepository.find();
  }
}

import { Repository } from 'typeorm';
import { Event } from './event.entity';
import { CreateEventDto, UpdateEventDto } from './event.dto';
export declare class EventService {
    private readonly eventRepository;
    constructor(eventRepository: Repository<Event>);
    create(createEventDto: CreateEventDto): Promise<Event>;
    update(eventId: number, updateEventDto: UpdateEventDto, userType: string): Promise<Event>;
    delete(eventId: number, userType: string): Promise<void>;
    getAllEvents(): Promise<Event[]>;
}

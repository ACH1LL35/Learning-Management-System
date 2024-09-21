import { EventService } from './event.service';
import { CreateEventDto, UpdateEventDto } from './event.dto';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    create(createEventDto: CreateEventDto, session: Record<string, any>): Promise<import("./event.entity").Event>;
    update(id: number, updateEventDto: UpdateEventDto, session: Record<string, any>): Promise<import("./event.entity").Event>;
    delete(id: number, session: Record<string, any>): Promise<void>;
    getAll(): Promise<import("./event.entity").Event[]>;
}

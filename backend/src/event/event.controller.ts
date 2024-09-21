import { Controller, Post, Delete, Patch, Body, Param, Session, UsePipes, ValidationPipe, Get, UnauthorizedException } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto, UpdateEventDto } from './event.dto';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(
    @Body() createEventDto: CreateEventDto,
    @Session() session: Record<string, any>,
  ) {
    const { UserType } = session;
    return this.eventService.create(createEventDto);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id') id: number,
    @Body() updateEventDto: UpdateEventDto,
    @Session() session: Record<string, any>,
  ) {
    const { UserType } = session;
    return this.eventService.update(id, updateEventDto, UserType);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: number,
    @Session() session: Record<string, any>,
  ) {
    const { UserType } = session;
    return this.eventService.delete(id, UserType);
  }

  @Get()
  async getAll() {
    return this.eventService.getAllEvents();
  }
}

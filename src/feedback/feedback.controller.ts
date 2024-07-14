import { Controller, Post, Body, Get, Session, UsePipes, ValidationPipe } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './feedback.dto';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(
    @Session() session: Record<string, any>,
    @Body() createFeedbackDto: CreateFeedbackDto,
  ) {
    const { UserId, UserType } = session;
    return this.feedbackService.create(UserId, createFeedbackDto, UserType);
  }

  @Get()
  async getAll() {
    return this.feedbackService.getAll();
  }
}

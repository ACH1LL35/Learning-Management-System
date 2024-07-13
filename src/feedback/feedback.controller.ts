// feedback.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto, UpdateFeedbackDto } from './feedback.dto';

@Controller('feedbacks')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  async create(@Body() createFeedbackDto: CreateFeedbackDto) {
    return this.feedbackService.create(createFeedbackDto);
  }

  @Get()
  async findAll() {
    return this.feedbackService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.feedbackService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateFeedbackDto: UpdateFeedbackDto) {
    return this.feedbackService.update(+id, updateFeedbackDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.feedbackService.delete(+id);
    return { message: `Feedback with ID ${id} deleted successfully` };
  }
}

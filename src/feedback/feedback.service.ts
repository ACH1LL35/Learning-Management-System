import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from './feedback.entity';
import { CreateFeedbackDto, UpdateFeedbackDto } from './feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private readonly feedbackRepository: Repository<Feedback>,
  ) {}

  async create(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    const feedback = this.feedbackRepository.create(createFeedbackDto);
    return this.feedbackRepository.save(feedback);
  }

  async findAll(): Promise<Feedback[]> {
    return this.feedbackRepository.find({ relations: ['User'] });
  }

  async findOne(FeedbackID: number): Promise<Feedback> {
    const feedback = await this.feedbackRepository.findOne({where:{FeedbackID:FeedbackID}});
    if (!feedback) {
      throw new NotFoundException(`Feedback with ID ${FeedbackID} not found`);
    }
    return feedback;
  }

  async update(FeedbackID: number, updateFeedbackDto: UpdateFeedbackDto): Promise<Feedback> {
    const feedback = await this.findOne(FeedbackID);
    Object.assign(feedback, updateFeedbackDto);
    return this.feedbackRepository.save(feedback);
  }

  async delete(FeedbackID: number): Promise<void> {
    const feedback = await this.findOne(FeedbackID);
    await this.feedbackRepository.remove(feedback);
  }
}

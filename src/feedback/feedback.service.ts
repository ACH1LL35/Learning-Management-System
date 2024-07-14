import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from './feedback.entity';
import { User } from '../user/user.entity';
import { CreateFeedbackDto } from './feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private readonly feedbackRepository: Repository<Feedback>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(userId: number, createFeedbackDto: CreateFeedbackDto, userType: string): Promise<Feedback> {
    const user = await this.userRepository.findOne({where:{UserID:userId}});

    if (!user) {
      throw new UnauthorizedException('Invalid user');
    }

    // Check if user is Student, Instructor, or Parent
    if (userType !== 'Student' && userType !== 'Instructor' && userType !== 'Parent') {
      throw new UnauthorizedException('You must be logged in as a student, instructor, or parent to create feedback');
    }

    const feedback = new Feedback();
    feedback.User = user;
    feedback.FeedbackContent = createFeedbackDto.FeedbackContent;
    feedback.FeedbackDate = new Date();

    return this.feedbackRepository.save(feedback);
  }

  async getAll(): Promise<Feedback[]> {
    return this.feedbackRepository.find({ relations: ['User'] });
  }
}

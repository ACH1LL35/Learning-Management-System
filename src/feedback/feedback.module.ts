import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from './feedback.entity';
import { User } from '../user/user.entity';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Feedback, User])],
  providers: [FeedbackService],
  controllers: [FeedbackController],
})
export class FeedbackModule {}

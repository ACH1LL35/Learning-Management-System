import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from './activity.entity';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { User } from 'src/user/user.entity';
import { Discussion } from '../discussion/discussion.entity';
import { DiscussionComment } from '../discussion-comment/discussion-comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Activity, User, Discussion, DiscussionComment])],
  providers: [ActivityService],
  controllers: [ActivityController],
})
export class ActivityModule {}
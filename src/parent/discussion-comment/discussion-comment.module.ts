import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscussionComment } from './discussion-comment.entity';
import { DiscussionCommentService } from './discussion-comment.service';
import { DiscussionCommentController } from './discussion-comment.controller';
import { User } from 'src/user/user.entity';
import { Discussion } from '../discussion/discussion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DiscussionComment, User, Discussion])],
  providers: [DiscussionCommentService],
  controllers: [DiscussionCommentController],
  exports: [DiscussionCommentService],
})
export class DiscussionCommentModule {}
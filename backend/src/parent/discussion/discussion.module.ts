import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Discussion } from './discussion.entity';
import { DiscussionService } from './discussion.service';
import { DiscussionController } from './discussion.controller';
import { User } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Discussion, User])],
  providers: [DiscussionService],
  controllers: [DiscussionController],
  exports: [DiscussionService],
})
export class DiscussionModule {}
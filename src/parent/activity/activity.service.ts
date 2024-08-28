import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Discussion } from '../discussion/discussion.entity';
import { DiscussionComment } from '../discussion-comment/discussion-comment.entity';
import { Request } from 'express';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Discussion)
    private readonly discussionRepository: Repository<Discussion>,
    @InjectRepository(DiscussionComment)
    private readonly discussionCommentRepository: Repository<DiscussionComment>
  ) {}

  async getAllActivities(req: Request): Promise<any[]> {
    const { UserID, UserType } = req.session;
    if (!UserID) {
      throw new UnauthorizedException('User not logged in');
    }
    if (UserType !== 'Parents') {
      throw new UnauthorizedException('User not authorized');
    }

    const discussions = await this.discussionRepository.find({ where: { posted_By: UserID } });
    const comments = await this.discussionCommentRepository.find({ where: { posted_By: UserID } });

    // Combine and mark each activity type
    const activities = [
      ...discussions.map(discussion => ({ type: 'discussion', ...discussion })),
      ...comments.map(comment => ({ type: 'comment', ...comment }))
    ];

    return activities;
  }
}
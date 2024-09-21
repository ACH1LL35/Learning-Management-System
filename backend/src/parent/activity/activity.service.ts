import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Discussion } from '../discussion/discussion.entity';
import { DiscussionComment } from '../discussion-comment/discussion-comment.entity';
import { User } from 'src/user/user.entity';
import { Request } from 'express';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Discussion)
    private readonly discussionRepository: Repository<Discussion>,
    @InjectRepository(DiscussionComment)
    private readonly discussionCommentRepository: Repository<DiscussionComment>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // Inject the User repository
  ) {}

  async getAllActivities(req: Request): Promise<any[]> {
    const { UserId, UserType } = req.session;
    if (!UserId) {
      throw new UnauthorizedException('User not logged in');
    }
    if (UserType !== 'Parents') {
      throw new UnauthorizedException('User not authorized');
    }

    // Find the user by ID
    const user = await this.userRepository.findOne({ where: { UserID: UserId } });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    // Use the user entity to find discussions and comments
    const discussions = await this.discussionRepository.find({ where: { posted_By: user } });
    const comments = await this.discussionCommentRepository.find({ where: { posted_By: user } });

    // Combine and mark each activity type
    const activities = [
      ...discussions.map(discussion => ({ type: 'discussion', ...discussion })),
      ...comments.map(comment => ({ type: 'comment', ...comment }))
    ];

    return activities;
  }
}
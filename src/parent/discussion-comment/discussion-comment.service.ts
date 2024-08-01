import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DiscussionComment } from './discussion-comment.entity';
import { User } from '../../user/user.entity';
import { CreateDiscussionCommentDto } from './discussion-comment.dto';
import { Discussion } from '../discussion/discussion.entity';

@Injectable()
export class DiscussionCommentService {
  constructor(
    @InjectRepository(DiscussionComment)
    private discussionCommentRepository: Repository<DiscussionComment>,
    @InjectRepository(Discussion)
    private discussionRepository: Repository<Discussion>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUserById(UserID: number): Promise<User> {
    return this.userRepository.findOne({ where: { UserID } });
  }

  async createDiscussionComment(
    createDiscussionCommentDto: CreateDiscussionCommentDto,
    UserID: number,
  ): Promise<DiscussionComment> {
    const user = await this.getUserById(UserID);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const discussion = await this.discussionRepository.findOne({
      where: { dID: createDiscussionCommentDto.dID },
    });

    if (!discussion) {
      throw new UnauthorizedException('Discussion not found');
    }

    const comment = this.discussionCommentRepository.create({
      ...createDiscussionCommentDto,
      discussion,
      posted_By: user,
    });

    return this.discussionCommentRepository.save(comment);
  }

  async findAll(): Promise<DiscussionComment[]> {
    return this.discussionCommentRepository.find({ relations: ['discussion'] });
  }

  async findOne(dcID: number): Promise<DiscussionComment> {
    const comment = await this.discussionCommentRepository.findOne({
      where: { dcID },
      relations: ['discussion'],
    });

    if (!comment) {
      throw new UnauthorizedException('Comment not found');
    }

    return comment;
  }
}

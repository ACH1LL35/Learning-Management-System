// src/parent/discussion/discussion.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Discussion } from './discussion.entity';
import { User } from '../../user/user.entity';
import { CreateDiscussionDto } from './discussion.dto';

@Injectable()
export class DiscussionService {
  constructor(
    @InjectRepository(Discussion)
    private discussionRepository: Repository<Discussion>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUserById(UserID: number): Promise<User> {
    return this.userRepository.findOne({ where: { UserID } });
  }

  async createDiscussion(
    createDiscussionDto: CreateDiscussionDto,
    UserID: number,
  ): Promise<Discussion> {
    const user = await this.getUserById(UserID);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const discussion = this.discussionRepository.create({
      ...createDiscussionDto,
      posted_By: user,
    });

    return this.discussionRepository.save(discussion);
  }

  async findAll(): Promise<Discussion[]> {
    return this.discussionRepository.find({ relations: ['comments'] });
  }

  async findOne(dID: number): Promise<Discussion> {
    const discussion = await this.discussionRepository.findOne({
      where: { dID },
      relations: ['comments'],
    });

    if (!discussion) {
      throw new UnauthorizedException('Discussion not found');
    }

    return discussion;
  }
}

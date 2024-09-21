// src/parent/discussion/discussion.service.ts
import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Discussion } from './discussion.entity';
import { User } from '../../user/user.entity';
import { CreateDiscussionDto, UpdateDiscussionDto } from './discussion.dto';

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

  async updateDiscussion(dID: number, updateDiscussionDto: UpdateDiscussionDto, userID: number): Promise<Discussion> {
    const discussion = await this.discussionRepository.findOne({ where: { dID }, relations: ['posted_By'] });
    if (!discussion) {
      throw new NotFoundException('Discussion not found');
    }
    if (discussion.posted_By.UserID !== userID) {
      throw new UnauthorizedException('You can only edit your own discussions');
    }

    // Update fields
    discussion.dtopic = updateDiscussionDto.dtopic || discussion.dtopic;
    discussion.dDesc = updateDiscussionDto.ddesc || discussion.dDesc;
    discussion.edited = true;
    discussion.last_edited = new Date();

    await this.discussionRepository.save(discussion);
    return discussion;
  }

  async deleteDiscussion(dID: number, userID: number): Promise<void> {
    const discussion = await this.discussionRepository.findOne({ where: { dID }, relations: ['posted_By'] });
    if (!discussion) {
      throw new NotFoundException('Discussion not found');
    }
    if (discussion.posted_By.UserID !== userID) {
      throw new UnauthorizedException('You can only delete your own discussions');
    }

    await this.discussionRepository.remove(discussion);
  }
}

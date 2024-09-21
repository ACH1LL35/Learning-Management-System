import { Controller, Post, Body, Get, Param, Req, UnauthorizedException, ForbiddenException, Delete, Patch} from '@nestjs/common';
import { DiscussionService } from './discussion.service';
import { Request } from 'express';
import session from 'express-session';
import { CreateDiscussionDto, UpdateDiscussionDto } from './discussion.dto';

@Controller('discussions')
export class DiscussionController {
  constructor(private readonly discussionService: DiscussionService) {}

  @Post()
  async createDiscussion(
    @Body() createDiscussionDto: CreateDiscussionDto,
    @Req() req: Request & { session: session.SessionData },
  ) {
    const { UserId, UserType } = req.session;

    if (!UserId) {
      throw new UnauthorizedException('User not logged in');
    }

    if (UserType !== 'Parents') {
      throw new UnauthorizedException('Only parents can create discussions');
    }

    return this.discussionService.createDiscussion(createDiscussionDto, UserId);
  }

  @Get()
  async getAllDiscussions() {
    return this.discussionService.findAll();
  }

  @Get(':dID')
  async getDiscussionById(@Param('dID') dID: number) {
    return this.discussionService.findOne(dID);
  }

  @Patch(':dID')
  async updateDiscussion(
    @Param('dID') dID: number,
    @Body() updateDiscussionDto: UpdateDiscussionDto,
    @Req() req: Request & { session: session.SessionData }
  ): Promise<any> {
    const { UserId, UserType } = req.session;
    if (!UserId) {
      throw new UnauthorizedException('User not logged in');
    }
    if (UserType !== 'Parents') {
      throw new ForbiddenException('User not authorized');
    }

    // Call the service method to update the discussion
    return this.discussionService.updateDiscussion(dID, updateDiscussionDto, UserId);
  }

  @Delete(':dID')
  async deleteDiscussion(
    @Param('dID') dID: number,
    @Req() req: Request & { session: session.SessionData }
  ): Promise<void> {
    const { UserId, UserType } = req.session;
    if (!UserId) {
      throw new UnauthorizedException('User not logged in');
    }
    if (UserType !== 'Parents') {
      throw new ForbiddenException('User not authorized');
    }

    // Call the service method to delete the discussion
    return this.discussionService.deleteDiscussion(dID, UserId);
  }
}

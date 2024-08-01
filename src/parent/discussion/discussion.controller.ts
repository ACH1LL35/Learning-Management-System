import { Controller, Post, Body, Get, Param, Req, UnauthorizedException, ForbiddenException} from '@nestjs/common';
import { DiscussionService } from './discussion.service';
import { Request } from 'express';
import session from 'express-session';
import { CreateDiscussionDto } from './discussion.dto';

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
}

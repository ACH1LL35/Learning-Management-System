import { Controller, Post, Body, Get, Param, Req, UnauthorizedException, ForbiddenException} from '@nestjs/common';
import { DiscussionCommentService } from './discussion-comment.service';
import { Request } from 'express';
import session from 'express-session';
import { CreateDiscussionCommentDto } from './discussion-comment.dto';

@Controller('discussion-comments')
export class DiscussionCommentController {
  constructor(private readonly discussionCommentService: DiscussionCommentService) {}

  @Post()
  async createDiscussionComment(
    @Body() createDiscussionCommentDto: CreateDiscussionCommentDto,
    @Req() req: Request & { session: session.SessionData },
  ) {
    const { UserId, UserType } = req.session;

    if (!UserId) {
      throw new UnauthorizedException('User not logged in');
    }

    if (UserType !== 'Parents') {
      throw new UnauthorizedException('Only parents can post comments');
    }

    return this.discussionCommentService.createDiscussionComment(createDiscussionCommentDto, UserId);
  }

  @Get()
  async getAllComments() {
    return this.discussionCommentService.findAll();
  }

  @Get(':dcID')
  async getCommentById(@Param('dcID') dcID: number) {
    return this.discussionCommentService.findOne(dcID);
  }
}

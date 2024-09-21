import { Controller, Get, Req, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { Request } from 'express';
import session from 'express-session';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  async getAllActivities(@Req() req: Request & { session: session.SessionData }): Promise<any[]> {
    return this.activityService.getAllActivities(req);
  }
}
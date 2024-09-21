import { Controller, Post, Body, Delete, Param, Get, Req, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { ChildManagementService } from './child-management.service';
import { CreateChildManagementDto } from './child-management.dto';
import { Request } from 'express';
import session from 'express-session';

@Controller('child-management')
export class ChildManagementController {
  constructor(private readonly childManagementService: ChildManagementService) {}

  @Get()
  async getAllChildren(@Req() req: Request & { session: session.SessionData }): Promise<any> {
    const { UserId, UserType } = req.session;
    if (!UserId) {
      throw new UnauthorizedException('User not logged in');
    }
    if (UserType !== 'Parents') {
      throw new UnauthorizedException('User not authorized');
    }
    return this.childManagementService.getAllChildren(UserId);
  }

  @Post()
  async addChild(@Body() createChildManagementDto: CreateChildManagementDto, @Req() req: Request): Promise<any> {
    const { UserId, UserType } = req.session;
    if (!UserId) {
      throw new UnauthorizedException('User not logged in');
    }
    if (UserType !== 'Parents') {
      throw new ForbiddenException('User not authorized');
    }
    return this.childManagementService.addChild(createChildManagementDto, UserId);
  }

  @Delete(':id')
  async removeChildById(@Param('id') cid: number, @Req() req: Request): Promise<{ message: string }> {
    const { UserId, UserType } = req.session;
    if (!UserId) {
      throw new UnauthorizedException('User not logged in');
    }
    if (UserType !== 'Parents') {
      throw new ForbiddenException('User not authorized');
    }
    return this.childManagementService.removeChildById(cid, UserId);
  }
}

import { Controller, Post, Body, Delete, Param, Get, Res, UseInterceptors, UploadedFile, Req, ForbiddenException, UnauthorizedException } from '@nestjs/common';
import { ConsentFormService } from './consent-form.service';
import { ConsentFormDto } from './consent-form.dto';
import { ConsentForm } from './consent-form.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response, Request } from 'express';
import session from 'express-session';
import * as path from 'path';
import * as fs from 'fs';

// Extend the session type to include user
declare module 'express-session' {
  interface SessionData {
    UserId: number;
    UserType: string;
  }
}

@Controller('consent-forms')
export class ConsentFormController {
  constructor(private readonly consentFormService: ConsentFormService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@Body() consentFormDto: ConsentFormDto, @UploadedFile() file: Express.Multer.File, @Req() req: Request & { session: session.SessionData }): Promise<ConsentForm> {
    const { UserId, UserType } = req.session;
    if (!UserId) {
      throw new UnauthorizedException('User not logged in');
    }
    if (UserType !== 'Parents') {
      throw new ForbiddenException('User not authorized');
    }
    return this.consentFormService.create(consentFormDto, file, UserId);
  }

  @Delete(':id')
  async delete(@Param('id') consentFormID: number, @Req() req: Request & { session: session.SessionData }): Promise<void> {
    const { UserId, UserType } = req.session;
    if (!UserId) {
      throw new UnauthorizedException('User not logged in');
    }
    if (UserType !== 'Parents') {
      throw new ForbiddenException('User not authorized');
    }
    await this.consentFormService.delete(consentFormID);
  }

  @Get(':id/view')
  async view(@Param('id') consentFormID: number, @Res() res: Response, @Req() req: Request & { session: session.SessionData }): Promise<void> {
    const { UserId, UserType } = req.session;
    if (!UserId) {
      throw new UnauthorizedException('User not logged in');
    }
    if (UserType !== 'Parents') {
      throw new ForbiddenException('User not authorized');
    }
    const consentForm = await this.consentFormService.findOne(consentFormID);
    if (!consentForm) {
      res.status(404).send('Consent Form not found');
      return;
    }

    const filePath = path.resolve(consentForm.FilePath);
    if (!fs.existsSync(filePath)) {
      res.status(404).send('File not found');
      return;
    }

    res.sendFile(filePath);
  }
}
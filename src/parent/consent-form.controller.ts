import { Controller, Post, Body, Delete, Param, UseInterceptors, UploadedFile, UnauthorizedException, Session } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { CreateConsentFormDto } from './create-consent-form.dto';
import { ConsentFormService } from './consent-form.service';

@Controller('consent-forms')
export class ConsentFormController {
  constructor(private readonly consentFormService: ConsentFormService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Session() session: any, // Directly using 'any' for session
    @Body() createConsentFormDto: CreateConsentFormDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<any> {
    try {
      const consentForm = await this.consentFormService.create(session.UserId, session.UserType, createConsentFormDto, file);
      return consentForm;
    } catch (error) {
      throw new UnauthorizedException('You must be logged in as a Parent to upload consent form');
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.consentFormService.delete(id);
  }
}

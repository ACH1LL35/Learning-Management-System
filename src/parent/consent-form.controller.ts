import { Controller, Post, Body, Delete, Param, Get, Res, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ConsentFormService } from './consent-form.service';
import { ConsentForm } from './consent-form.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';
import { ConsentFormDto } from './create-consent-form.dto';

@Controller('consent-forms')
export class ConsentFormController {
  constructor(private readonly consentFormService: ConsentFormService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@Body() consentFormDto: ConsentFormDto, @UploadedFile() file: Express.Multer.File): Promise<ConsentForm> {
    return this.consentFormService.create(consentFormDto, file);
  }

  @Delete(':id')
  async delete(@Param('id') consentFormID: number): Promise<void> {
    await this.consentFormService.delete(consentFormID);
  }

  @Get(':id/view')
  async view(@Param('id') consentFormID: number, @Res() res: Response): Promise<void> {
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

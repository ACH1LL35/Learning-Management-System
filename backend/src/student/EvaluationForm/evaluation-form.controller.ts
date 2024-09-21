import { Controller, Post, Body, Delete, Param, Get, Res, UseInterceptors, UploadedFile } from '@nestjs/common';
import { EvaluationFormService } from './evaluation-form.service';
import { EvaluationFormDto } from './evaluation-form.dto';
import { EvaluationForm } from './evaluation-form.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';

@Controller('evaluation-forms')
export class EvaluationFormController {
  constructor(private readonly evaluationFormService: EvaluationFormService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@Body() evaluationFormDto: EvaluationFormDto, @UploadedFile() file: Express.Multer.File): Promise<EvaluationForm> {
    return this.evaluationFormService.create(evaluationFormDto, file);
  }

  @Delete(':id')
  async delete(@Param('id') evaluationFormID: number): Promise<void> {
    await this.evaluationFormService.delete(evaluationFormID);
  }

  @Get(':id/view')
  async view(@Param('id') evaluationFormID: number, @Res() res: Response): Promise<void> {
    const evaluationForm = await this.evaluationFormService.findOne(evaluationFormID);
    if (!evaluationForm) {
      res.status(404).send('Evaluation Form not found');
      return;
    }

    const filePath = path.resolve(evaluationForm.FilePath);
    if (!fs.existsSync(filePath)) {
      res.status(404).send('File not found');
      return;
    }

    res.sendFile(filePath);
  }
}

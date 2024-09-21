import { Controller, Post, Body, Delete, Param, Get, Res, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ReportingService } from './report.service';
import { ReportDto } from './report.dto';
import { Reporting } from './report.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';

@Controller('reports')
export class ReportingController {
  constructor(private readonly reportingService: ReportingService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@Body() reportDto: ReportDto, @UploadedFile() file: Express.Multer.File): Promise<Reporting> {
    return this.reportingService.create(reportDto, file);
  }

  @Delete(':id')
  async delete(@Param('id') reportID: number): Promise<void> {
    await this.reportingService.delete(reportID);
  }

  @Get(':id/view')
  async view(@Param('id') reportID: number, @Res() res: Response): Promise<void> {
    const report = await this.reportingService.findOne(reportID);
    if (!report) {
      res.status(404).send('Report not found');
      return;
    }

    const filePath = path.resolve(report.FilePath);
    if (!fs.existsSync(filePath)) {
      res.status(404).send('File not found');
      return;
    }

    res.sendFile(filePath);
  }
}
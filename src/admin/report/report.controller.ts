// reporting.controller.ts

import { Controller, Post, Body, Delete, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ReportingService } from './report.service';
import { ReportDto } from './report.dto';
import { Reporting } from './report.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('reports')
export class ReportingController {
  constructor(private readonly reportingService: ReportingService) {}

  @Post()
  @UseInterceptors(FileInterceptor('File')) 
  async create(@Body() reportDto: ReportDto, @UploadedFile() file: Express.Multer.File): Promise<Reporting> {
    return this.reportingService.create(reportDto, file);
  }

  @Delete(':id')
  async delete(@Param('id') reportID: number): Promise<void> {
    await this.reportingService.delete(reportID);
  }
}

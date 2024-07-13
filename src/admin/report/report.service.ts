// reporting.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reporting } from './report.entity';
import { ReportDto } from './report.dto';
import * as fs from 'fs';
import * as path from 'path';
import { createWriteStream } from 'fs';
import { UploadedFile } from '@nestjs/common';

@Injectable()
export class ReportingService {
  constructor(
    @InjectRepository(Reporting)
    private readonly reportingRepository: Repository<Reporting>,
  ) {}

  async create(reportDto: ReportDto, file: Express.Multer.File): Promise<Reporting> {
    const { ReportName, Description, ReportDate, GeneratedBy } = reportDto;

    
    const uploadPath = './uploads/reports/';
    const fileName = `${Date.now()}-${file.originalname}`;
    const filePath = path.join(uploadPath, fileName);

    
    await new Promise((resolve, reject) => {
      const fileStream = createWriteStream(filePath);
      fileStream.on('error', error => reject(error));
      // fileStream.on('finish', () => resolve());
      file.stream.pipe(fileStream);
    });

    
    const reporting = this.reportingRepository.create({
      ReportName,
      Description,
      ReportDate,
      GeneratedBy,
      FilePath: filePath, 
    });

    return this.reportingRepository.save(reporting);
  }

  async delete(reportID: number): Promise<void> {
    const reporting = await this.reportingRepository.findOne(reportID as any);
    if (!reporting) {
      throw new NotFoundException(`Report with ID ${reportID} not found`);
    }

    
    if (reporting.FilePath) {
      fs.unlinkSync(reporting.FilePath);
    }

    await this.reportingRepository.delete(reportID);
  }
}

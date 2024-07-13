import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reporting } from './report.entity';
import { ReportDto } from './report.dto';
import * as fs from 'fs';
import * as path from 'path';
import { createWriteStream } from 'fs';

@Injectable()
export class ReportingService {
  constructor(
    @InjectRepository(Reporting)
    private readonly reportingRepository: Repository<Reporting>,
  ) {}

  async create(reportDto: ReportDto, file: Express.Multer.File): Promise<Reporting> {
    const { ReportName, Description, ReportDate, GeneratedBy } = reportDto;

    const uploadPath = './uploads/reports/';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    const fileName = `${Date.now()}-${file.originalname}`;
    const filePath = path.join(uploadPath, fileName);

    await new Promise<void>((resolve, reject) => {
      const fileStream = createWriteStream(filePath);
      fileStream.on('error', error => reject(error));
      fileStream.on('finish', () => resolve());
      fileStream.end(file.buffer);
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
    const reporting = await this.reportingRepository.findOne({ where: { ReportID: reportID } });
    if (!reporting) {
      throw new NotFoundException(`Report with ID ${reportID} not found`);
    }

    if (reporting.FilePath) {
      fs.unlinkSync(reporting.FilePath);
    }

    await this.reportingRepository.delete(reportID);
  }

  async findOne(reportID: number): Promise<Reporting> {
    const report = await this.reportingRepository.findOne({ where: { ReportID: reportID } });
    if (!report) {
      throw new NotFoundException(`Report with ID ${reportID} not found`);
    }
    return report;
  }
}
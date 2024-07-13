// report.dto.ts

import { IsNotEmpty, IsDateString } from 'class-validator';
import { UploadedFile } from '@nestjs/common';

export class ReportDto {
  @IsNotEmpty()
  ReportName: string;

  @IsNotEmpty()
  Description: string;

  @IsDateString()
  ReportDate: Date;

  @IsNotEmpty()
  GeneratedBy: number; 

  File: UploadedFile; 
}

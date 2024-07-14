import { IsNotEmpty, IsDateString } from 'class-validator';

export class ReportDto {
  @IsNotEmpty()
  ReportName: string;

  @IsNotEmpty()
  Description: string;

  @IsDateString()
  ReportDate: Date;

  @IsNotEmpty()
  GeneratedBy: string;
}

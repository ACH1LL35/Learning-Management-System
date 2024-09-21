// support.dto.ts

import { IsNotEmpty, IsString, IsOptional, IsDate, IsNumber } from 'class-validator';

export class CreateSupportDto {
  @IsNotEmpty()
  @IsNumber()
  UserID: number;

  @IsNotEmpty()
  @IsString()
  IssueType: string;

  @IsNotEmpty()
  @IsString()
  IssueDescription: string;

  @IsOptional()
  @IsString()
  Resolution?: string;

  @IsNotEmpty()
  @IsDate()
  SupportDate: Date;
}

export class UpdateSupportDto {
  @IsOptional()
  @IsString()
  IssueType?: string;

  @IsOptional()
  @IsString()
  IssueDescription?: string;

  @IsOptional()
  @IsString()
  Resolution?: string;

  @IsOptional()
  @IsDate()
  SupportDate?: Date;
}

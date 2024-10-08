import { IsNotEmpty, IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateDiscussionDto {
  @IsString()
  dtopic: string;

  @IsString()
  dDesc: string;
}

export class UpdateDiscussionDto {
  @IsOptional()
  @IsString()
  dtopic?: string;

  @IsOptional()
  @IsString()
  ddesc?: string;
}
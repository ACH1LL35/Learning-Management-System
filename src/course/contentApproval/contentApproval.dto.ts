import { IsNotEmpty, IsEnum } from 'class-validator';

export class CreateContentApprovalDto {
  @IsNotEmpty()
  CourseID: number;

  @IsNotEmpty()
  ContentTitle: string;

  @IsNotEmpty()
  ContentDescription: string;

  @IsNotEmpty()
  ContentType: string;
}

export class UpdateContentApprovalDto {
  @IsNotEmpty()
  ContentTitle: string;

  @IsNotEmpty()
  ContentDescription: string;

  @IsNotEmpty()
  ContentType: string;
}

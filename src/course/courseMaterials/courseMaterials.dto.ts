import { IsNotEmpty, IsEnum } from 'class-validator';

export class CourseMaterialDto {
  @IsNotEmpty()
  CourseID: number;

  @IsNotEmpty()
  ContentID: number;

  @IsNotEmpty()
  ContentTitle: string;

  @IsNotEmpty()
  ContentDescription: string;

  @IsNotEmpty()
  ContentType: string;
}

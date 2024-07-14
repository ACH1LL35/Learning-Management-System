import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  CourseName: string;

  @IsNotEmpty()
  Description: string;

  @IsNotEmpty()
  InstructorID: number;

  @IsNotEmpty()
  CourseStatus: string;
}

export class UpdateCourseDto {
  @IsNotEmpty()
  @IsString()
  CourseName: string;

  @IsNotEmpty()
  @IsString()
  Description: string;

  @IsNotEmpty()
  InstructorID: number;

  @IsNotEmpty()
  @IsString()
  CourseStatus: string;
}

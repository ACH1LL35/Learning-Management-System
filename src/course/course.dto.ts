import { IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { Instructor } from '../instructor/instructor.entity';

export class CreateCourseDto {
    
  @IsNotEmpty()
  CourseName: string;

  @IsNotEmpty()
  Description: string;

  @IsNotEmpty()
  InstructorID: Instructor;

  @IsNotEmpty()
  EnrollmentDate: Date;

  @IsNotEmpty()
  @IsEnum(['active', 'inactive'])
  CourseStatus: string;
}

export class UpdateCourseDto {
  @IsOptional()
  @IsNotEmpty()
  CourseName?: string;

  @IsOptional()
  @IsNotEmpty()
  Description?: string;

  @IsOptional()
  @IsNotEmpty()
  InstructorID?: number;

  @IsOptional()
  @IsNotEmpty()
  EnrollmentDate?: Date;

  @IsOptional()
  @IsEnum(['active', 'inactive'])
  CourseStatus?: string;
}

import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseMaterialDto {
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

export class DeleteCourseMaterialDto {
  @IsNotEmpty()
  MaterialID: number;
}

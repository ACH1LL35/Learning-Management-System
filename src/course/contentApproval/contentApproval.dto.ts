import { IsNotEmpty, IsString } from 'class-validator';

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

export class DeleteContentApprovalDto {
  @IsNotEmpty()
  ContentID: number;
}

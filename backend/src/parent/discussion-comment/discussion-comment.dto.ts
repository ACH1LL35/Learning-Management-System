import { IsNotEmpty, IsString, IsNumber, IsOptional, IsDate, IsBoolean } from 'class-validator';

export class CreateDiscussionCommentDto {
  @IsNumber()
  dID: number;

  @IsString()
  dcComment: string;
}

export class UpdateDiscussionCommentDto {
  @IsOptional()
  @IsString()
  dcComment?: string;
}
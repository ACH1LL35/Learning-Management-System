import { IsNotEmpty, IsString, IsNumber, IsOptional, IsDate, IsBoolean } from 'class-validator';

export class CreateDiscussionCommentDto {
  @IsNumber()
  dID: number;

  @IsString()
  dcComment: string;
}

export class UpdateCommentDto {
  @IsOptional()
  @IsString()
  dcComment?: string;

  @IsOptional()
  @IsBoolean()
  edited?: boolean;

  @IsOptional()
  @IsDate()
  last_edited?: Date;
}
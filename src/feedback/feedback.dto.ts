import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';

export class CreateFeedbackDto {
  @IsNotEmpty()
  @IsNumber()
  UserID: number;

  @IsNotEmpty()
  @IsString()
  FeedbackContent: string;

  @IsNotEmpty()
  @IsDate()
  FeedbackDate: Date;
}

export class UpdateFeedbackDto {
  @IsNotEmpty()
  @IsString()
  FeedbackContent: string;

  @IsNotEmpty()
  @IsDate()
  FeedbackDate: Date;
}

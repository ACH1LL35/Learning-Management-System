import { IsNotEmpty } from 'class-validator';

export class CreateFeedbackDto {
  @IsNotEmpty()
  FeedbackContent: string;
}
export class UpdateFeedbackDto {
  @IsNotEmpty()
  FeedbackContent: string;
}
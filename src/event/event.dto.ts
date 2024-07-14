import { IsNotEmpty, IsDateString,IsOptional } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  EventName: string;

  @IsNotEmpty()
  Description: string;

  @IsNotEmpty()
  EventDate: Date;

  @IsNotEmpty()
  Location: string;
}
export class UpdateEventDto {
  @IsOptional()
  EventName?: string;

  @IsOptional()
  Description?: string;

  @IsOptional()
  EventDate?: Date;

  @IsOptional()
  Location?: string;
}
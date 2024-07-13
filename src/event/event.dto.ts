// event.dto.ts

import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  EventName: string;

  @IsNotEmpty()
  @IsString()
  Description: string;

  @IsNotEmpty()
  @IsDate()
  EventDate: Date;

  @IsNotEmpty()
  @IsString()
  Location: string;
}

export class UpdateEventDto {
  @IsString()
  EventName?: string;

  @IsString()
  Description?: string;

  @IsDate()
  EventDate?: Date;

  @IsString()
  Location?: string;
}

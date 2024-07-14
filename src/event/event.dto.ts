<<<<<<< HEAD
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
=======
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
>>>>>>> 2666f3b08492601bdd748804fd3154976bd4d380
}
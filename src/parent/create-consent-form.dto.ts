import { IsNotEmpty, IsString } from 'class-validator';

export class CreateConsentFormDto {
  @IsNotEmpty()
  @IsString()
  fileName: string;
}

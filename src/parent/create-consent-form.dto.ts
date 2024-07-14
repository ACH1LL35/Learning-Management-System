import { IsNotEmpty, IsDateString } from 'class-validator';

export class ConsentFormDto {
  @IsNotEmpty()
  FileName: string;

  @IsDateString()
  UploadDate: Date;
}

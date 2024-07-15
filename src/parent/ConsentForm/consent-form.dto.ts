import { IsNotEmpty, IsDateString } from 'class-validator';

export class ConsentFormDto {
  @IsNotEmpty()
  FormName: string;

  @IsNotEmpty()
  Description: string;

  @IsDateString()
  FormDate: Date;

  @IsNotEmpty()
  CollectedBy: string;
}

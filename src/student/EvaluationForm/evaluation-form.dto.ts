import { IsNotEmpty, IsDateString } from 'class-validator';

export class EvaluationFormDto {
  @IsNotEmpty()
  FormName: string;

  @IsNotEmpty()
  Description: string;

  @IsDateString()
  FormDate: Date;

  @IsNotEmpty()
  EvaluatedBy: string;
}

import { IsNotEmpty,IsOptional } from 'class-validator';

export class CreateFAQDto {
  @IsNotEmpty()
  Question: string;

  @IsNotEmpty()
  Answer: string;

  @IsNotEmpty()
  Category: string;
}
export class UpdateFAQDto {
  @IsOptional()
  Question?: string;

  @IsOptional()
  Answer?: string;

  @IsOptional()
  Category?: string;
}
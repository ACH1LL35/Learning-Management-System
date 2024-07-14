import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFAQDto {
  @IsNotEmpty()
  @IsString()
  Question: string;

  @IsNotEmpty()
  @IsString()
  Answer: string;

  @IsNotEmpty()
  @IsString()
  Category: string;
}

export class UpdateFAQDto {
  @IsString()
  Question?: string;

  @IsString()
  Answer?: string;

  @IsString()
  Category?: string;
}

import { IsNotEmpty, IsEmail, MinLength, IsOptional, IsMobilePhone } from 'class-validator';

export class ParentDto {
  @IsNotEmpty()
  Fname: string;

  @IsNotEmpty()
  Lname: string;

  @IsNotEmpty()
  @IsEmail()
  Email: string;

  @IsNotEmpty()
  @IsMobilePhone()
  Mobile: string;

  @IsNotEmpty()
  @MinLength(6)
  Password: string;
}

export class UpdateParentDto {
  @IsOptional()
  @IsNotEmpty()
  Fname?: string;

  @IsOptional()
  @IsNotEmpty()
  Lname?: string;

  @IsOptional()
  @IsEmail()
  Email?: string;

  @IsOptional()
  @IsMobilePhone()
  Mobile?: string;

  @IsOptional()
  @MinLength(6)
  Password?: string;
}

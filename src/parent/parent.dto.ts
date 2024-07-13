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
  @IsMobilePhone() // Ensures the mobile number is valid
  Mobile: string;

  @IsNotEmpty()
  @MinLength(6) // Minimum length for password
  Password: string; // Add password field
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
  @IsMobilePhone() // Ensures the mobile number is valid
  Mobile?: string;

  @IsOptional()
  @MinLength(6) // Minimum length for password
  Password?: string; // Add password field
}

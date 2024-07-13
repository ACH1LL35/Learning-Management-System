import { IsNotEmpty, IsEmail, IsOptional, IsMobilePhone, IsDateString } from 'class-validator';

export class CreateAdminDto {
  @IsNotEmpty()
  UserID: number;

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
  Gender: string;

  @IsNotEmpty()
  @IsDateString()
  DOB: string;

  @IsNotEmpty()
  Address: string;
}

export class UpdateAdminDto {
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
  Gender?: string;

  @IsOptional()
  @IsDateString()
  DOB?: string;

  @IsOptional()
  Address?: string;
}

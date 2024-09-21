import { IsNotEmpty, IsEmail, IsDate, IsString, IsOptional } from 'class-validator';

export class CreateAdminDto {
  @IsNotEmpty()
  Fname: string;

  @IsNotEmpty()
  Lname: string;

  @IsNotEmpty()
  @IsEmail()
  Email: string;

  @IsNotEmpty()
  Mobile: string;

  @IsNotEmpty()
  Gender: string;

  @IsNotEmpty()
  DOB: Date;

  @IsNotEmpty()
  Address: string;
}

export class UpdateAdminDto {
  @IsOptional()
  @IsString()
  Fname?: string;

  @IsOptional()
  @IsString()
  Lname?: string;

  @IsOptional()
  @IsEmail()
  Email?: string;

  @IsOptional()
  @IsString()
  Mobile?: string;

  @IsOptional()
  @IsString()
  Gender?: string;

  @IsOptional()
  DOB?: Date;

  @IsOptional()
  @IsString()
  Address?: string;
}

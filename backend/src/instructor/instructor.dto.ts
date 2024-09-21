import { IsNotEmpty, IsEmail, IsDate, IsString } from 'class-validator';

export class CreateInstructorDto {
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

export class UpdateInstructorDto {
  @IsNotEmpty()
  @IsString()
  Fname: string;

  @IsNotEmpty()
  @IsString()
  Lname: string;

  @IsNotEmpty()
  @IsEmail()
  Email: string;

  @IsNotEmpty()
  @IsString()
  Mobile: string;

  @IsNotEmpty()
  @IsString()
  Gender: string;

  @IsNotEmpty()
  DOB: Date;

  @IsNotEmpty()
  @IsString()
  Address: string;
}

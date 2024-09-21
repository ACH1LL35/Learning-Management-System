import { IsNotEmpty, MinLength, IsEnum, IsOptional, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class UserDto {
  @IsString()
  @IsNotEmpty()
  Username: string;

  @IsString()
  @IsNotEmpty()
  Password: string;

  @IsString()
  @IsNotEmpty()
  UserType: string; // Add UserType field
}

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty()
  Username?: string;

  @IsOptional()
  @MinLength(6)
  Password?: string;

  @IsOptional()
  @IsEnum(['Student', 'Instructor', 'Parents', 'Admin'])
  UserType?: string;
}
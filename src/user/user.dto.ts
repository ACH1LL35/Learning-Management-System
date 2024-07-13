import { IsNotEmpty, MinLength, IsOptional, IsEnum } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  Username: string;

  @IsNotEmpty()
  @MinLength(6)
  Password: string;

  @IsNotEmpty()
  @IsEnum(['Student', 'Instructor', 'Parents', 'Admin'])
  UserType: string;
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
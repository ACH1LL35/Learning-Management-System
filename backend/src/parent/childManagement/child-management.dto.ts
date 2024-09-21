import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateChildManagementDto {
  @IsNotEmpty()
  @IsNumber()
  StudentID: number;

  @IsNotEmpty()
  @IsNumber()
  ParentsID: number;
}

export class UpdateChildManagementDto {
  @IsNotEmpty()
  @IsNumber()
  StudentID: number;

  @IsNotEmpty()
  @IsNumber()
  ParentsID: number;
}
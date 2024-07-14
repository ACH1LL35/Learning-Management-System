import { IsNotEmpty, IsEmail, IsNumber, IsString } from "class-validator";

export class CreateStudentDto {
  @IsNotEmpty()
  Fname: string;

  @IsNotEmpty()
  Lname: string;

  @IsNotEmpty()
  DOB: Date;

  @IsNotEmpty()
  @IsEmail()
  Email: string;

  @IsNotEmpty()
  Mobile: string;

  @IsNotEmpty()
  Gender: string;

  @IsNotEmpty()
  Address: string;
}

export class UpdateStudentDto {
  @IsNotEmpty()
  Fname?: string;

  @IsNotEmpty()
  Lname?: string;

  @IsNotEmpty()
  DOB?: Date;

  @IsNotEmpty()
  @IsEmail()
  Email?: string;

  @IsNotEmpty()
  Mobile?: string;

  @IsNotEmpty()
  Gender?: string;

  @IsNotEmpty()
  Address?: string;
}

export class CreateCourseEnrollmentDto {
  @IsNotEmpty()
  @IsNumber()
  UserID: number;

  @IsNotEmpty()
  @IsNumber()
  CourseID: number;
}

export class CreateWishlistDto {
  @IsNotEmpty()
  @IsNumber()
  user: number;

  @IsNotEmpty()
  @IsNumber()
  course: number;
}

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsNumber()
  user: number;

  @IsNotEmpty()
  @IsNumber()
  Amount: number;

  @IsNotEmpty()
  @IsString()
  PaymentType: string;
}

export class CreateSubmissionDto {
  @IsNotEmpty()
  @IsNumber()
  user: number;

  @IsNotEmpty()
  @IsString()
  SubmissionContent: string;
}

export class CreateAchievementDto {
  @IsNotEmpty()
  @IsNumber()
  user: number;

  @IsNotEmpty()
  @IsString()
  AchievementType: string;
}

export class CreateCommentDto {
  @IsNotEmpty()
  @IsNumber()
  user: number;

  @IsNotEmpty()
  @IsString()
  Comment: string;
}

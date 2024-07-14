import {IsNotEmpty, Matches, MaxLength, MinLength,IsNumber,IsString} from "class-validator";
import {User} from '../user/user.entity'
import {Course} from '../course/course.entity'

export class StudentDTO{

    
    @Matches(/^[A-Za-z]+$/,{message: "Please enter a valid name"})
    @IsNotEmpty({ message: 'Username is required'})
    Username:string;


    @IsNotEmpty({ message: 'Email is required'})
    @Matches(/^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+xyz$/, { message: 'Email must be a valid .xyz domain.'})
    email:string;

    @IsNotEmpty({ message: 'Email is required'})
    @MinLength(8)
    Password :string;
 

}



export class StudentUpdateDTO{
    
    @Matches(/^[A-Za-z]+$/,{message: "Please enter a valid name"})
    @IsNotEmpty({ message: 'Username is required'})
    Username:string;


    @IsNotEmpty({ message: 'Email is required'})
    @Matches(/^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+xyz$/, { message: 'Email must be a valid .xyz domain.'})
    email:string;

    @IsNotEmpty({ message: 'Email is required'})
    @MinLength(8)
    Password :string;
   
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
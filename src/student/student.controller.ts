import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query, Res, UploadedFile, UseInterceptors, UsePipes, ValidationPipe,Patch,Delete} from "@nestjs/common";
import { StudentService,CourseEnrollmentsService,WishlistService,PaymentsService,SubmissionsService,AchievementsService,CommentService} from "./student.service"
import { StudentDTO, StudentUpdateDTO,CreateCourseEnrollmentDto} from "./student.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterError, diskStorage } from "multer";
import { studentProfile,CourseEnrollments, Wishlist,Payments,Submissions,Achievements,Comment} from './student.entity';
import { User } from "src/user/user.entity";


@Controller('Student')
export class StudentController{
constructor(private readonly StudentService: StudentService){}



/*
//Create/Sign Up 
@Post('addStudent')
@UsePipes(new ValidationPipe())
addStudent(@Body() myobj:StudentDTO): object {
  console.log(myobj);
  return this.StudentService.addStudent(myobj);
}


//update 
@Put('updateStudent/:id')
@UsePipes(new ValidationPipe())
updateStudent(@Body() myobj:StudentUpdateDTO, @Param('id') id:number): object {
  return this.StudentService.updateStudent(myobj,id)
}

*/

// course 

    
}

@Controller('course-enrollments')
export class CourseEnrollmentsController {
  constructor(private readonly courseEnrollmentsService: CourseEnrollmentsService) {}

  @Get()
  async getAllCourseEnrollments(): Promise<CourseEnrollments[]> {
    return await this.courseEnrollmentsService.getAllCourseEnrollments();
  }

  @Post()
  async createCourseEnrollment(
    @Body() courseEnrollment: CourseEnrollments,
  ): Promise<CourseEnrollments> {
    return await this.courseEnrollmentsService.createCourseEnrollment(
      courseEnrollment,
    );
  }



  @Delete('get/:id')
  async deleteCourseEnrollment(@Param('id') id: number): Promise<void> {
    await this.courseEnrollmentsService.deleteCourseEnrollment(id);
  }
}

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Get()
  async getAllWishlist(): Promise<Wishlist[]> {
    return await this.wishlistService.getAllWishlist();
  }

  @Post()
  async createWishlist(@Body() wishlist: Wishlist): Promise<Wishlist> {
    return await this.wishlistService.createWishlist(wishlist);
  }

  @Put(':id')
  async updateWishlist(
    @Param('id') id: number,
    @Body() wishlist: Wishlist,
  ): Promise<Wishlist> {
    return await this.wishlistService.updateWishlist(id, wishlist);
  }

  @Delete(':id')
  async deleteWishlist(@Param('id') id: number): Promise<void> {
    await this.wishlistService.deleteWishlist(id);
  }
}

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  async getAllPayments(): Promise<Payments[]> {
    return await this.paymentsService.getAllPayments();
  }

  @Post()
  async createPayment(@Body() payment: Payments): Promise<Payments> {
    return await this.paymentsService.createPayment(payment);
  }

  @Put(':id')
  async updatePayment(
    @Param('id') id: number,
    @Body() payment: Payments,
  ): Promise<Payments> {
    return await this.paymentsService.updatePayment(id, payment);
  }

  @Delete(':id')
  async deletePayment(@Param('id') id: number): Promise<void> {
    await this.paymentsService.deletePayment(id);
  }
}

@Controller('submissions')
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @Get()
  async getAllSubmissions(): Promise<Submissions[]> {
    return await this.submissionsService.getAllSubmissions();
  }

  @Post()
  async createSubmission(
    @Body() submission: Submissions,
  ): Promise<Submissions> {
    return await this.submissionsService.createSubmission(submission);
  }

  @Put(':id')
  async updateSubmission(
    @Param('id') id: number,
    @Body() submission: Submissions,
  ): Promise<Submissions> {
    return await this.submissionsService.updateSubmission(id, submission);
  }

  @Delete(':id')
  async deleteSubmission(@Param('id') id: number): Promise<void> {
    await this.submissionsService.deleteSubmission(id);
  }
}

@Controller('achievements')
export class AchievementsController {
  constructor(private readonly achievementsService: AchievementsService) {}

  @Get()
  async getAllAchievements(): Promise<Achievements[]> {
    return await this.achievementsService.getAllAchievements();
  }

  @Post()
  async createAchievement(
    @Body() achievement: Achievements,
  ): Promise<Achievements> {
    return await this.achievementsService.createAchievement(achievement);
  }

  @Put(':id')
  async updateAchievement(
    @Param('id') id: number,
    @Body() achievement: Achievements,
  ): Promise<Achievements> {
    return await this.achievementsService.updateAchievement(id, achievement);
  }

  @Delete(':id')
  async deleteAchievement(@Param('id') id: number): Promise<void> {
    await this.achievementsService.deleteAchievement(id);
  }
}


@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}
/*
  @Get()
  async getAllComments(): Promise<Comment[]> {
    return await this.commentService.getAllComments();
  }

  @Post()
  async createComment(@Body() comment: Comment): Promise<Comment> {
    return await this.commentService.createComment(comment);
  }
*/
  
}
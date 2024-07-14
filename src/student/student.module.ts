import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentService, CourseEnrollmentsService, WishlistService, PaymentsService, SubmissionsService, AchievementsService } from "./student.service";
import { StudentController } from "./student.controller";
import { CourseEnrollmentsController } from "./course-enrollments.controller";
import { WishlistController } from "./wishlist.controller";
import { PaymentsController } from "./payments.controller";
import { SubmissionsController } from "./submissions.controller";
import { AchievementsController } from "./achievements.controller";
import { studentProfile, CourseEnrollments, Wishlist, Payments, Submissions, Achievements } from "./student.entity";

@Module({
  imports: [TypeOrmModule.forFeature([studentProfile, CourseEnrollments, Wishlist, Payments, Submissions, Achievements])],
  controllers: [StudentController, CourseEnrollmentsController, WishlistController, PaymentsController, SubmissionsController, AchievementsController],
  providers: [StudentService, CourseEnrollmentsService, WishlistService, PaymentsService, SubmissionsService, AchievementsService],
})
export class StudentModule {}

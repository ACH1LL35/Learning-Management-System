import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CourseEnrollmentsService } from "./student.service";
import { CourseEnrollments } from "./student.entity";
import { CreateCourseEnrollmentDto } from "./student.dto";

@Controller('course-enrollments')
export class CourseEnrollmentsController {
  constructor(private readonly courseEnrollmentsService: CourseEnrollmentsService) {}

  @Get()
  async getAllCourseEnrollments(): Promise<CourseEnrollments[]> {
    return await this.courseEnrollmentsService.getAllCourseEnrollments();
  }

  @Post()
  async createCourseEnrollment(@Body() createCourseEnrollmentDto: CreateCourseEnrollmentDto): Promise<CourseEnrollments> {
    return await this.courseEnrollmentsService.createCourseEnrollment(createCourseEnrollmentDto); // Pass the instance
  }

  @Delete(':id')
  async deleteCourseEnrollment(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.courseEnrollmentsService.deleteCourseEnrollment(id);
  }
}
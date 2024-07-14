import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Patch, Delete, Session, UnauthorizedException, UsePipes, ValidationPipe } from "@nestjs/common";
import { StudentService, CourseEnrollmentsService, WishlistService, PaymentsService, SubmissionsService, AchievementsService } from "./student.service";
import { CreateStudentDto, UpdateStudentDto, CreateCourseEnrollmentDto } from "./student.dto";

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createStudentDto: CreateStudentDto, @Session() session: Record<string, any>) {
    if (!session.UserId || session.UserType !== 'Student') {
      throw new UnauthorizedException('You must be logged in as a student');
    }

    const createdStudent = await this.studentService.create(createStudentDto, session.UserId);
    return { message: 'Student profile created successfully', student: createdStudent };
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
    @Session() session: Record<string, any>,
  ) {
    if (!session.UserId || session.UserType !== 'Student') {
      throw new UnauthorizedException('You must be logged in as a student');
    }

    const updatedStudent = await this.studentService.update(parseInt(id), updateStudentDto, session.UserId);
    return { message: 'Student profile updated successfully', student: updatedStudent };
  }
}

import { Controller, Post, Patch, Get, Body, Param, Session, UsePipes, ValidationPipe, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto, UpdateCourseDto } from './course.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(
    @Body() createCourseDto: CreateCourseDto,
    @Session() session: Record<string, any>,
  ) {
    if (!session.UserId || session.UserType !== 'Admin') {
      throw new UnauthorizedException('You must be logged in as an admin to create a new course');
    }

    const createdCourse = await this.courseService.create(createCourseDto);
    return { message: 'Course created successfully', course: createdCourse };
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id') id: number,
    @Body() updateCourseDto: UpdateCourseDto,
    @Session() session: Record<string, any>,
  ) {
    if (!session.UserId || session.UserType !== 'Admin') {
      throw new UnauthorizedException('You must be logged in as an admin to update course details');
    }

    const updatedCourse = await this.courseService.update(id, updateCourseDto);
    return { message: 'Course updated successfully', course: updatedCourse };
  }

  @Get()
  async getAllCourses() {
    return this.courseService.getAllCourses();
  }
}

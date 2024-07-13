import { Controller, Post, Body, Patch, Param, Delete, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto, UpdateCourseDto } from './course.dto';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createCourseDto: CreateCourseDto) {
    const createdCourse = await this.courseService.create(createCourseDto);
    return { message: 'Course created successfully', course: createdCourse };
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Param('id') id: number, @Body() updateCourseDto: UpdateCourseDto) {
    const updatedCourse = await this.courseService.update(id, updateCourseDto);
    return { message: 'Course updated successfully', course: updatedCourse };
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.courseService.delete(id);
    return { message: 'Course deleted successfully' };
  }

  @Get()
  async findAll() {
    const courses = await this.courseService.findAll();
    return { message: 'Courses retrieved successfully', courses };
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const course = await this.courseService.findOne(id);
    return { message: 'Course retrieved successfully', course };
  }
}

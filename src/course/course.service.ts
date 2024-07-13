import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';
import { CreateCourseDto, UpdateCourseDto } from './course.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const course = this.courseRepository.create(createCourseDto);
    return this.courseRepository.save(course);
  }

  async update(id: number, updateCourseDto: UpdateCourseDto): Promise<Course> {
    const course = await this.courseRepository.findOne({ where: { CourseID: id } });
    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    Object.assign(course, updateCourseDto);
    return this.courseRepository.save(course);
  }

  async delete(id: number): Promise<void> {
    const course = await this.courseRepository.findOne({ where: { CourseID: id } });
    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    await this.courseRepository.remove(course);
  }

  async findAll(): Promise<Course[]> {
    return this.courseRepository.find();
  }

  async findOne(id: number): Promise<Course> {
    const course = await this.courseRepository.findOne({ where: { CourseID: id } });
    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return course;
  }
}

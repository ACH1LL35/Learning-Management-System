import { Repository } from 'typeorm';
import { Course } from './course.entity';
import { CreateCourseDto, UpdateCourseDto } from './course.dto';
export declare class CourseService {
    private readonly courseRepository;
    constructor(courseRepository: Repository<Course>);
    create(createCourseDto: CreateCourseDto): Promise<Course>;
    update(courseId: number, updateCourseDto: UpdateCourseDto): Promise<Course>;
    getAllCourses(): Promise<Course[]>;
}

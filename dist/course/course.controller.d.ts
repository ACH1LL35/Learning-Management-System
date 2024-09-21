import { CourseService } from './course.service';
import { CreateCourseDto, UpdateCourseDto } from './course.dto';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    create(createCourseDto: CreateCourseDto, session: Record<string, any>): Promise<{
        message: string;
        course: import("./course.entity").Course;
    }>;
    update(id: number, updateCourseDto: UpdateCourseDto, session: Record<string, any>): Promise<{
        message: string;
        course: import("./course.entity").Course;
    }>;
    getAllCourses(): Promise<import("./course.entity").Course[]>;
}

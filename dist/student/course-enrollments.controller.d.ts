import { CourseEnrollmentsService } from "./student.service";
import { CourseEnrollments } from "./student.entity";
import { CreateCourseEnrollmentDto } from "./student.dto";
export declare class CourseEnrollmentsController {
    private readonly courseEnrollmentsService;
    constructor(courseEnrollmentsService: CourseEnrollmentsService);
    getAllCourseEnrollments(): Promise<CourseEnrollments[]>;
    createCourseEnrollment(createCourseEnrollmentDto: CreateCourseEnrollmentDto): Promise<CourseEnrollments>;
    deleteCourseEnrollment(id: number): Promise<void>;
}

import { Instructor } from '../instructor/instructor.entity';
export declare class Course {
    CourseID: number;
    CourseName: string;
    Description: string;
    Instructor: Instructor;
    EnrollmentDate: Date;
    CourseStatus: string;
}

import { User } from '../user/user.entity';
import { Course } from '../course/course.entity';
export declare class studentProfile {
    StudentID: number;
    Fname: string;
    Lname: string;
    DOB: Date;
    Email: string;
    Mobile: string;
    Gender: string;
    Address: string;
    user: User;
}
export declare class CourseEnrollments {
    id: number;
    user: User;
    course: Course;
}
export declare class Wishlist {
    id: number;
    user: User;
    course: Course;
}
export declare class Payments {
    id: number;
    user: User;
    Amount: number;
    PaymentType: string;
}
export declare class Submissions {
    id: number;
    user: User;
    SubmissionContent: string;
}
export declare class Achievements {
    id: number;
    user: User;
    AchievementType: string;
}

import { Course } from '../course.entity';
import { ContentApproval } from '../contentApproval/contentApproval.entity';
export declare class CourseMaterial {
    MaterialID: number;
    course: Course;
    contentApproval: ContentApproval;
    ContentTitle: string;
    ContentDescription: string;
    ContentType: string;
    UploadDate: Date;
}

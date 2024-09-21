export declare class CreateStudentDto {
    Fname: string;
    Lname: string;
    DOB: Date;
    Email: string;
    Mobile: string;
    Gender: string;
    Address: string;
}
export declare class UpdateStudentDto {
    Fname?: string;
    Lname?: string;
    DOB?: Date;
    Email?: string;
    Mobile?: string;
    Gender?: string;
    Address?: string;
}
export declare class CreateCourseEnrollmentDto {
    UserID: number;
    CourseID: number;
}
export declare class CreateWishlistDto {
    user: number;
    course: number;
}
export declare class CreatePaymentDto {
    user: number;
    Amount: number;
    PaymentType: string;
}
export declare class CreateSubmissionDto {
    user: number;
    SubmissionContent: string;
}
export declare class CreateAchievementDto {
    user: number;
    AchievementType: string;
}
export declare class CreateCommentDto {
    user: number;
    Comment: string;
}

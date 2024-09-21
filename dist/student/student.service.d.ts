import { Repository } from "typeorm";
import { studentProfile, CourseEnrollments, Wishlist, Payments, Submissions, Achievements } from "./student.entity";
import { CreateStudentDto, UpdateStudentDto, CreateCourseEnrollmentDto } from "./student.dto";
export declare class StudentService {
    private readonly studentRepository;
    constructor(studentRepository: Repository<studentProfile>);
    create(createStudentDto: CreateStudentDto, userId: number): Promise<studentProfile>;
    update(id: number, updateStudentDto: UpdateStudentDto, userId: number): Promise<studentProfile>;
}
export declare class CourseEnrollmentsService {
    private readonly courseEnrollmentsRepository;
    constructor(courseEnrollmentsRepository: Repository<CourseEnrollments>);
    getAllCourseEnrollments(): Promise<CourseEnrollments[]>;
    createCourseEnrollment(createCourseEnrollmentDto: CreateCourseEnrollmentDto): Promise<CourseEnrollments>;
    deleteCourseEnrollment(id: number): Promise<void>;
}
export declare class WishlistService {
    private readonly wishlistRepository;
    constructor(wishlistRepository: Repository<Wishlist>);
    getAllWishlist(): Promise<Wishlist[]>;
    createWishlist(wishlist: Wishlist): Promise<Wishlist>;
    updateWishlist(id: number, wishlist: Wishlist): Promise<Wishlist>;
    deleteWishlist(id: number): Promise<void>;
}
export declare class PaymentsService {
    private readonly paymentsRepository;
    constructor(paymentsRepository: Repository<Payments>);
    getAllPayments(): Promise<Payments[]>;
    createPayment(payment: Payments): Promise<Payments>;
    updatePayment(id: number, payment: Payments): Promise<Payments>;
    deletePayment(id: number): Promise<void>;
}
export declare class SubmissionsService {
    private readonly submissionsRepository;
    constructor(submissionsRepository: Repository<Submissions>);
    getAllSubmissions(): Promise<Submissions[]>;
    createSubmission(submission: Submissions): Promise<Submissions>;
    updateSubmission(id: number, submission: Submissions): Promise<Submissions>;
    deleteSubmission(id: number): Promise<void>;
}
export declare class AchievementsService {
    private readonly achievementsRepository;
    constructor(achievementsRepository: Repository<Achievements>);
    getAllAchievements(): Promise<Achievements[]>;
    createAchievement(achievement: Achievements): Promise<Achievements>;
    updateAchievement(id: number, achievement: Achievements): Promise<Achievements>;
    deleteAchievement(id: number): Promise<void>;
}

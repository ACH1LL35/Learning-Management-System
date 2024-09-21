"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementsService = exports.SubmissionsService = exports.PaymentsService = exports.WishlistService = exports.CourseEnrollmentsService = exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const student_entity_1 = require("./student.entity");
let StudentService = class StudentService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    async create(createStudentDto, userId) {
        const student = this.studentRepository.create({
            ...createStudentDto,
            user: { UserID: userId },
        });
        return await this.studentRepository.save(student);
    }
    async update(id, updateStudentDto, userId) {
        const student = await this.studentRepository.findOne({ where: { StudentID: id, user: { UserID: userId } } });
        if (!student) {
            throw new common_1.NotFoundException(`Student with ID ${id} not found`);
        }
        Object.assign(student, updateStudentDto);
        return await this.studentRepository.save(student);
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.studentProfile)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StudentService);
let CourseEnrollmentsService = class CourseEnrollmentsService {
    constructor(courseEnrollmentsRepository) {
        this.courseEnrollmentsRepository = courseEnrollmentsRepository;
    }
    async getAllCourseEnrollments() {
        return await this.courseEnrollmentsRepository.find({ relations: ['user', 'course'] });
    }
    async createCourseEnrollment(createCourseEnrollmentDto) {
        const courseEnrollment = this.courseEnrollmentsRepository.create({
            user: { UserID: createCourseEnrollmentDto.UserID },
            course: { id: createCourseEnrollmentDto.CourseID },
        });
        return await this.courseEnrollmentsRepository.save(courseEnrollment);
    }
    async deleteCourseEnrollment(id) {
        await this.courseEnrollmentsRepository.delete(id);
    }
};
exports.CourseEnrollmentsService = CourseEnrollmentsService;
exports.CourseEnrollmentsService = CourseEnrollmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.CourseEnrollments)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CourseEnrollmentsService);
let WishlistService = class WishlistService {
    constructor(wishlistRepository) {
        this.wishlistRepository = wishlistRepository;
    }
    async getAllWishlist() {
        return await this.wishlistRepository.find({ relations: ['user', 'course'] });
    }
    async createWishlist(wishlist) {
        return await this.wishlistRepository.save(wishlist);
    }
    async updateWishlist(id, wishlist) {
        const existingWishlist = await this.wishlistRepository.findOne({ where: { id } });
        if (!existingWishlist) {
            throw new common_1.NotFoundException(`Wishlist item with ID ${id} not found`);
        }
        Object.assign(existingWishlist, wishlist);
        return await this.wishlistRepository.save(existingWishlist);
    }
    async deleteWishlist(id) {
        await this.wishlistRepository.delete(id);
    }
};
exports.WishlistService = WishlistService;
exports.WishlistService = WishlistService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Wishlist)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WishlistService);
let PaymentsService = class PaymentsService {
    constructor(paymentsRepository) {
        this.paymentsRepository = paymentsRepository;
    }
    async getAllPayments() {
        return await this.paymentsRepository.find({ relations: ['user'] });
    }
    async createPayment(payment) {
        return await this.paymentsRepository.save(payment);
    }
    async updatePayment(id, payment) {
        const existingPayment = await this.paymentsRepository.findOne({ where: { id } });
        if (!existingPayment) {
            throw new common_1.NotFoundException(`Payment with ID ${id} not found`);
        }
        Object.assign(existingPayment, payment);
        return await this.paymentsRepository.save(existingPayment);
    }
    async deletePayment(id) {
        await this.paymentsRepository.delete(id);
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Payments)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaymentsService);
let SubmissionsService = class SubmissionsService {
    constructor(submissionsRepository) {
        this.submissionsRepository = submissionsRepository;
    }
    async getAllSubmissions() {
        return await this.submissionsRepository.find({ relations: ['user'] });
    }
    async createSubmission(submission) {
        return await this.submissionsRepository.save(submission);
    }
    async updateSubmission(id, submission) {
        const existingSubmission = await this.submissionsRepository.findOne({ where: { id } });
        if (!existingSubmission) {
            throw new common_1.NotFoundException(`Submission with ID ${id} not found`);
        }
        Object.assign(existingSubmission, submission);
        return await this.submissionsRepository.save(existingSubmission);
    }
    async deleteSubmission(id) {
        await this.submissionsRepository.delete(id);
    }
};
exports.SubmissionsService = SubmissionsService;
exports.SubmissionsService = SubmissionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Submissions)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SubmissionsService);
let AchievementsService = class AchievementsService {
    constructor(achievementsRepository) {
        this.achievementsRepository = achievementsRepository;
    }
    async getAllAchievements() {
        return await this.achievementsRepository.find({ relations: ['user'] });
    }
    async createAchievement(achievement) {
        return await this.achievementsRepository.save(achievement);
    }
    async updateAchievement(id, achievement) {
        const existingAchievement = await this.achievementsRepository.findOne({ where: { id } });
        if (!existingAchievement) {
            throw new common_1.NotFoundException(`Achievement with ID ${id} not found`);
        }
        Object.assign(existingAchievement, achievement);
        return await this.achievementsRepository.save(existingAchievement);
    }
    async deleteAchievement(id) {
        await this.achievementsRepository.delete(id);
    }
};
exports.AchievementsService = AchievementsService;
exports.AchievementsService = AchievementsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Achievements)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AchievementsService);
//# sourceMappingURL=student.service.js.map
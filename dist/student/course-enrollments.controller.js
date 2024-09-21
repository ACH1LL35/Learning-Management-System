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
exports.CourseEnrollmentsController = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
const student_dto_1 = require("./student.dto");
let CourseEnrollmentsController = class CourseEnrollmentsController {
    constructor(courseEnrollmentsService) {
        this.courseEnrollmentsService = courseEnrollmentsService;
    }
    async getAllCourseEnrollments() {
        return await this.courseEnrollmentsService.getAllCourseEnrollments();
    }
    async createCourseEnrollment(createCourseEnrollmentDto) {
        return await this.courseEnrollmentsService.createCourseEnrollment(createCourseEnrollmentDto);
    }
    async deleteCourseEnrollment(id) {
        await this.courseEnrollmentsService.deleteCourseEnrollment(id);
    }
};
exports.CourseEnrollmentsController = CourseEnrollmentsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourseEnrollmentsController.prototype, "getAllCourseEnrollments", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_dto_1.CreateCourseEnrollmentDto]),
    __metadata("design:returntype", Promise)
], CourseEnrollmentsController.prototype, "createCourseEnrollment", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CourseEnrollmentsController.prototype, "deleteCourseEnrollment", null);
exports.CourseEnrollmentsController = CourseEnrollmentsController = __decorate([
    (0, common_1.Controller)('course-enrollments'),
    __metadata("design:paramtypes", [student_service_1.CourseEnrollmentsService])
], CourseEnrollmentsController);
//# sourceMappingURL=course-enrollments.controller.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const student_service_1 = require("./student.service");
const student_controller_1 = require("./student.controller");
const course_enrollments_controller_1 = require("./course-enrollments.controller");
const wishlist_controller_1 = require("./wishlist.controller");
const payments_controller_1 = require("./payments.controller");
const submissions_controller_1 = require("./submissions.controller");
const achievements_controller_1 = require("./achievements.controller");
const student_entity_1 = require("./student.entity");
let StudentModule = class StudentModule {
};
exports.StudentModule = StudentModule;
exports.StudentModule = StudentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([student_entity_1.studentProfile, student_entity_1.CourseEnrollments, student_entity_1.Wishlist, student_entity_1.Payments, student_entity_1.Submissions, student_entity_1.Achievements])],
        controllers: [student_controller_1.StudentController, course_enrollments_controller_1.CourseEnrollmentsController, wishlist_controller_1.WishlistController, payments_controller_1.PaymentsController, submissions_controller_1.SubmissionsController, achievements_controller_1.AchievementsController],
        providers: [student_service_1.StudentService, student_service_1.CourseEnrollmentsService, student_service_1.WishlistService, student_service_1.PaymentsService, student_service_1.SubmissionsService, student_service_1.AchievementsService],
        exports: [typeorm_1.TypeOrmModule]
    })
], StudentModule);
//# sourceMappingURL=student.module.js.map
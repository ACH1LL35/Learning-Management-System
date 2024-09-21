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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Achievements = exports.Submissions = exports.Payments = exports.Wishlist = exports.CourseEnrollments = exports.studentProfile = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const course_entity_1 = require("../course/course.entity");
const class_validator_1 = require("class-validator");
let studentProfile = class studentProfile {
};
exports.studentProfile = studentProfile;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], studentProfile.prototype, "StudentID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], studentProfile.prototype, "Fname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], studentProfile.prototype, "Lname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], studentProfile.prototype, "DOB", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], studentProfile.prototype, "Email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], studentProfile.prototype, "Mobile", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], studentProfile.prototype, "Gender", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], studentProfile.prototype, "Address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.OneToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'UserID' }),
    __metadata("design:type", user_entity_1.User)
], studentProfile.prototype, "user", void 0);
exports.studentProfile = studentProfile = __decorate([
    (0, typeorm_1.Entity)("student")
], studentProfile);
let CourseEnrollments = class CourseEnrollments {
};
exports.CourseEnrollments = CourseEnrollments;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CourseEnrollments.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'UserID' }),
    __metadata("design:type", user_entity_1.User)
], CourseEnrollments.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.Course),
    (0, typeorm_1.JoinColumn)({ name: 'CourseID' }),
    __metadata("design:type", course_entity_1.Course)
], CourseEnrollments.prototype, "course", void 0);
exports.CourseEnrollments = CourseEnrollments = __decorate([
    (0, typeorm_1.Entity)('course_enrollments')
], CourseEnrollments);
let Wishlist = class Wishlist {
};
exports.Wishlist = Wishlist;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Wishlist.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'UserID' }),
    __metadata("design:type", user_entity_1.User)
], Wishlist.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.Course),
    (0, typeorm_1.JoinColumn)({ name: 'CourseID' }),
    __metadata("design:type", course_entity_1.Course)
], Wishlist.prototype, "course", void 0);
exports.Wishlist = Wishlist = __decorate([
    (0, typeorm_1.Entity)()
], Wishlist);
let Payments = class Payments {
};
exports.Payments = Payments;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Payments.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'UserID' }),
    __metadata("design:type", user_entity_1.User)
], Payments.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payments.prototype, "Amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payments.prototype, "PaymentType", void 0);
exports.Payments = Payments = __decorate([
    (0, typeorm_1.Entity)()
], Payments);
let Submissions = class Submissions {
};
exports.Submissions = Submissions;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Submissions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'UserID' }),
    __metadata("design:type", user_entity_1.User)
], Submissions.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Submissions.prototype, "SubmissionContent", void 0);
exports.Submissions = Submissions = __decorate([
    (0, typeorm_1.Entity)()
], Submissions);
let Achievements = class Achievements {
};
exports.Achievements = Achievements;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Achievements.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'UserID' }),
    __metadata("design:type", user_entity_1.User)
], Achievements.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Achievements.prototype, "AchievementType", void 0);
exports.Achievements = Achievements = __decorate([
    (0, typeorm_1.Entity)()
], Achievements);
//# sourceMappingURL=student.entity.js.map
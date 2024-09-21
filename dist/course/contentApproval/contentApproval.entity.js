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
exports.ContentApproval = void 0;
const typeorm_1 = require("typeorm");
const course_entity_1 = require("../course.entity");
let ContentApproval = class ContentApproval {
};
exports.ContentApproval = ContentApproval;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ContentApproval.prototype, "ContentID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.Course, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'CourseID' }),
    __metadata("design:type", course_entity_1.Course)
], ContentApproval.prototype, "Course", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ContentApproval.prototype, "ContentTitle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ContentApproval.prototype, "ContentDescription", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ContentApproval.prototype, "ContentType", void 0);
exports.ContentApproval = ContentApproval = __decorate([
    (0, typeorm_1.Entity)()
], ContentApproval);
//# sourceMappingURL=contentApproval.entity.js.map
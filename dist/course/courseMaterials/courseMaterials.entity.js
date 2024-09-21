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
exports.CourseMaterial = void 0;
const typeorm_1 = require("typeorm");
const course_entity_1 = require("../course.entity");
const contentApproval_entity_1 = require("../contentApproval/contentApproval.entity");
let CourseMaterial = class CourseMaterial {
};
exports.CourseMaterial = CourseMaterial;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CourseMaterial.prototype, "MaterialID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.Course, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'CourseID' }),
    __metadata("design:type", course_entity_1.Course)
], CourseMaterial.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => contentApproval_entity_1.ContentApproval, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'ContentID' }),
    __metadata("design:type", contentApproval_entity_1.ContentApproval)
], CourseMaterial.prototype, "contentApproval", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseMaterial.prototype, "ContentTitle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseMaterial.prototype, "ContentDescription", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseMaterial.prototype, "ContentType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], CourseMaterial.prototype, "UploadDate", void 0);
exports.CourseMaterial = CourseMaterial = __decorate([
    (0, typeorm_1.Entity)()
], CourseMaterial);
//# sourceMappingURL=courseMaterials.entity.js.map
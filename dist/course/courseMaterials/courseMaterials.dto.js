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
exports.DeleteCourseMaterialDto = exports.CreateCourseMaterialDto = void 0;
const class_validator_1 = require("class-validator");
class CreateCourseMaterialDto {
}
exports.CreateCourseMaterialDto = CreateCourseMaterialDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateCourseMaterialDto.prototype, "CourseID", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateCourseMaterialDto.prototype, "ContentID", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCourseMaterialDto.prototype, "ContentTitle", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCourseMaterialDto.prototype, "ContentDescription", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCourseMaterialDto.prototype, "ContentType", void 0);
class DeleteCourseMaterialDto {
}
exports.DeleteCourseMaterialDto = DeleteCourseMaterialDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], DeleteCourseMaterialDto.prototype, "MaterialID", void 0);
//# sourceMappingURL=courseMaterials.dto.js.map
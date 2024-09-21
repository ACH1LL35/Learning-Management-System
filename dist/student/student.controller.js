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
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
const student_dto_1 = require("./student.dto");
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    async create(createStudentDto, session) {
        if (!session.UserId || session.UserType !== 'Student') {
            throw new common_1.UnauthorizedException('You must be logged in as a student');
        }
        const createdStudent = await this.studentService.create(createStudentDto, session.UserId);
        return { message: 'Student profile created successfully', student: createdStudent };
    }
    async update(id, updateStudentDto, session) {
        if (!session.UserId || session.UserType !== 'Student') {
            throw new common_1.UnauthorizedException('You must be logged in as a student');
        }
        const updatedStudent = await this.studentService.update(parseInt(id), updateStudentDto, session.UserId);
        return { message: 'Student profile updated successfully', student: updatedStudent };
    }
};
exports.StudentController = StudentController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_dto_1.CreateStudentDto, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, student_dto_1.UpdateStudentDto, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "update", null);
exports.StudentController = StudentController = __decorate([
    (0, common_1.Controller)('students'),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentController);
//# sourceMappingURL=student.controller.js.map
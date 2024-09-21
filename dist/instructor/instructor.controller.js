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
exports.InstructorController = void 0;
const common_1 = require("@nestjs/common");
const instructor_service_1 = require("./instructor.service");
const instructor_dto_1 = require("./instructor.dto");
let InstructorController = class InstructorController {
    constructor(instructorService) {
        this.instructorService = instructorService;
    }
    async create(createInstructorDto, session) {
        if (!session.UserId || session.UserType !== 'Instructor') {
            throw new common_1.UnauthorizedException('You must be logged in as an instructor ');
        }
        const createdInstructor = await this.instructorService.create(createInstructorDto, session.UserId);
        return { message: 'Instructor created successfully', instructor: createdInstructor };
    }
    async update(id, updateInstructorDto, session) {
        if (!session.UserId || session.UserType !== 'Instructor') {
            throw new common_1.UnauthorizedException('You must be logged in as instructor to update instructor details');
        }
        const updatedInstructor = await this.instructorService.update(id, updateInstructorDto, session.UserId);
        return { message: 'Instructor updated successfully', instructor: updatedInstructor };
    }
};
exports.InstructorController = InstructorController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [instructor_dto_1.CreateInstructorDto, Object]),
    __metadata("design:returntype", Promise)
], InstructorController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, instructor_dto_1.UpdateInstructorDto, Object]),
    __metadata("design:returntype", Promise)
], InstructorController.prototype, "update", null);
exports.InstructorController = InstructorController = __decorate([
    (0, common_1.Controller)('instructor'),
    __metadata("design:paramtypes", [instructor_service_1.InstructorService])
], InstructorController);
//# sourceMappingURL=instructor.controller.js.map
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
exports.ChildManagementService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const child_management_entity_1 = require("./child-management.entity");
const user_entity_1 = require("../../user/user.entity");
const student_entity_1 = require("../../student/student.entity");
let ChildManagementService = class ChildManagementService {
    constructor(childManagementRepository, userRepository, studentRepository) {
        this.childManagementRepository = childManagementRepository;
        this.userRepository = userRepository;
        this.studentRepository = studentRepository;
    }
    async getAllChildren(ParentsID) {
        const user = await this.userRepository.findOne({ where: { UserID: ParentsID, UserType: 'Parents' } });
        if (!user) {
            throw new common_1.UnauthorizedException('User not authorized');
        }
        const children = await this.childManagementRepository.find({ where: { Parent: user } });
        const result = await Promise.all(children.map(async (child) => {
            const student = await this.studentRepository.findOne({ where: { StudentID: child.StudentID } });
            return {
                cid: child.cid,
                date_added: child.date_added,
                StudentID: child.StudentID,
                Fname: student?.Fname || 'N/A',
                Lname: student?.Lname || 'N/A',
            };
        }));
        return result;
    }
    async addChild(createChildManagementDto, parentId) {
        const parent = await this.userRepository.findOne({ where: { UserID: parentId, UserType: 'Parents' } });
        if (!parent) {
            throw new common_1.UnauthorizedException('User not authorized');
        }
        const student = await this.studentRepository.findOne({ where: { StudentID: createChildManagementDto.StudentID } });
        if (!student) {
            throw new common_1.BadRequestException('Student not found');
        }
        const existingChild = await this.childManagementRepository.findOne({ where: { StudentID: createChildManagementDto.StudentID } });
        if (existingChild) {
            throw new common_1.BadRequestException('The specific student is already under someone\'s supervision');
        }
        const newChild = this.childManagementRepository.create({
            ...createChildManagementDto,
            Parent: parent,
            StudentID: student.StudentID,
        });
        return this.childManagementRepository.save(newChild);
    }
    async removeChildById(cid, parentId) {
        const parent = await this.userRepository.findOne({ where: { UserID: parentId, UserType: 'Parents' } });
        if (!parent) {
            throw new common_1.UnauthorizedException('User not authorized');
        }
        const child = await this.childManagementRepository.findOne({ where: { cid, Parent: parent } });
        if (!child) {
            throw new common_1.BadRequestException('Child not found or not managed by this parent');
        }
        await this.childManagementRepository.delete(cid);
        return { message: 'Student removed successfully' };
    }
};
exports.ChildManagementService = ChildManagementService;
exports.ChildManagementService = ChildManagementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(child_management_entity_1.ChildManagement)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(student_entity_1.studentProfile)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ChildManagementService);
//# sourceMappingURL=child-management.service.js.map
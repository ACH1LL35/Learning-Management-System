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
exports.CourseMaterialService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const courseMaterials_entity_1 = require("./courseMaterials.entity");
let CourseMaterialService = class CourseMaterialService {
    constructor(materialRepository) {
        this.materialRepository = materialRepository;
    }
    async create(createCourseMaterialDto) {
        const material = this.materialRepository.create(createCourseMaterialDto);
        return this.materialRepository.save(material);
    }
    async delete(deleteCourseMaterialDto, userType) {
        if (userType !== 'Admin' && userType !== 'Instructor') {
            throw new common_1.UnauthorizedException('You must be logged in as an admin or instructor to delete course material');
        }
        const { MaterialID } = deleteCourseMaterialDto;
        const material = await this.materialRepository.findOne({ where: { MaterialID: MaterialID } });
        if (!material) {
            throw new common_1.BadRequestException(`Course material with ID ${MaterialID} not found`);
        }
        await this.materialRepository.remove(material);
    }
    async getAllCourseMaterials() {
        return this.materialRepository.find();
    }
};
exports.CourseMaterialService = CourseMaterialService;
exports.CourseMaterialService = CourseMaterialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(courseMaterials_entity_1.CourseMaterial)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CourseMaterialService);
//# sourceMappingURL=courseMaterials.service.js.map
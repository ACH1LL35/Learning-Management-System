"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseMaterialModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const courseMaterials_entity_1 = require("./courseMaterials.entity");
const courseMaterials_service_1 = require("./courseMaterials.service");
const courseMaterials_controller_1 = require("./courseMaterials.controller");
let CourseMaterialModule = class CourseMaterialModule {
};
exports.CourseMaterialModule = CourseMaterialModule;
exports.CourseMaterialModule = CourseMaterialModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([courseMaterials_entity_1.CourseMaterial])],
        providers: [courseMaterials_service_1.CourseMaterialService],
        controllers: [courseMaterials_controller_1.CourseMaterialController],
    })
], CourseMaterialModule);
//# sourceMappingURL=courseMaterials.module.js.map
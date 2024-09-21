"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildManagementModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const child_management_service_1 = require("./child-management.service");
const child_management_controller_1 = require("./child-management.controller");
const child_management_entity_1 = require("./child-management.entity");
const user_entity_1 = require("../../user/user.entity");
const student_module_1 = require("../../student/student.module");
const student_entity_1 = require("../../student/student.entity");
let ChildManagementModule = class ChildManagementModule {
};
exports.ChildManagementModule = ChildManagementModule;
exports.ChildManagementModule = ChildManagementModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([child_management_entity_1.ChildManagement, user_entity_1.User, student_entity_1.studentProfile]),
            student_module_1.StudentModule
        ],
        providers: [child_management_service_1.ChildManagementService],
        controllers: [child_management_controller_1.ChildManagementController],
    })
], ChildManagementModule);
//# sourceMappingURL=child-management.module.js.map
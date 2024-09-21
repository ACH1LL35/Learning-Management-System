"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentApprovalModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const contentApproval_entity_1 = require("./contentApproval.entity");
const contentApproval_service_1 = require("./contentApproval.service");
const contentApproval_controller_1 = require("./contentApproval.controller");
let ContentApprovalModule = class ContentApprovalModule {
};
exports.ContentApprovalModule = ContentApprovalModule;
exports.ContentApprovalModule = ContentApprovalModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([contentApproval_entity_1.ContentApproval])],
        providers: [contentApproval_service_1.ContentApprovalService],
        controllers: [contentApproval_controller_1.ContentApprovalController],
    })
], ContentApprovalModule);
//# sourceMappingURL=contentApproval.module.js.map
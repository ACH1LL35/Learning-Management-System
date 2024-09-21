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
exports.ChildManagementController = void 0;
const common_1 = require("@nestjs/common");
const child_management_service_1 = require("./child-management.service");
const child_management_dto_1 = require("./child-management.dto");
let ChildManagementController = class ChildManagementController {
    constructor(childManagementService) {
        this.childManagementService = childManagementService;
    }
    async getAllChildren(req) {
        const { UserId, UserType } = req.session;
        if (!UserId) {
            throw new common_1.UnauthorizedException('User not logged in');
        }
        if (UserType !== 'Parents') {
            throw new common_1.UnauthorizedException('User not authorized');
        }
        return this.childManagementService.getAllChildren(UserId);
    }
    async addChild(createChildManagementDto, req) {
        const { UserId, UserType } = req.session;
        if (!UserId) {
            throw new common_1.UnauthorizedException('User not logged in');
        }
        if (UserType !== 'Parents') {
            throw new common_1.ForbiddenException('User not authorized');
        }
        return this.childManagementService.addChild(createChildManagementDto, UserId);
    }
    async removeChildById(cid, req) {
        const { UserId, UserType } = req.session;
        if (!UserId) {
            throw new common_1.UnauthorizedException('User not logged in');
        }
        if (UserType !== 'Parents') {
            throw new common_1.ForbiddenException('User not authorized');
        }
        return this.childManagementService.removeChildById(cid, UserId);
    }
};
exports.ChildManagementController = ChildManagementController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChildManagementController.prototype, "getAllChildren", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [child_management_dto_1.CreateChildManagementDto, Object]),
    __metadata("design:returntype", Promise)
], ChildManagementController.prototype, "addChild", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ChildManagementController.prototype, "removeChildById", null);
exports.ChildManagementController = ChildManagementController = __decorate([
    (0, common_1.Controller)('child-management'),
    __metadata("design:paramtypes", [child_management_service_1.ChildManagementService])
], ChildManagementController);
//# sourceMappingURL=child-management.controller.js.map
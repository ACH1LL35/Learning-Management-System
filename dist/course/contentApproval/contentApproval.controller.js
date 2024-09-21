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
exports.ContentApprovalController = void 0;
const common_1 = require("@nestjs/common");
const contentApproval_service_1 = require("./contentApproval.service");
const contentApproval_dto_1 = require("./contentApproval.dto");
let ContentApprovalController = class ContentApprovalController {
    constructor(contentService) {
        this.contentService = contentService;
    }
    async create(createContentDto, session) {
        const { UserType } = session;
        return this.contentService.create(createContentDto, UserType);
    }
    async delete(id, session) {
        const { UserType } = session;
        return this.contentService.delete({ ContentID: id }, UserType);
    }
};
exports.ContentApprovalController = ContentApprovalController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contentApproval_dto_1.CreateContentApprovalDto, Object]),
    __metadata("design:returntype", Promise)
], ContentApprovalController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ContentApprovalController.prototype, "delete", null);
exports.ContentApprovalController = ContentApprovalController = __decorate([
    (0, common_1.Controller)('content-approval'),
    __metadata("design:paramtypes", [contentApproval_service_1.ContentApprovalService])
], ContentApprovalController);
//# sourceMappingURL=contentApproval.controller.js.map
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
exports.DiscussionController = void 0;
const common_1 = require("@nestjs/common");
const discussion_service_1 = require("./discussion.service");
const discussion_dto_1 = require("./discussion.dto");
let DiscussionController = class DiscussionController {
    constructor(discussionService) {
        this.discussionService = discussionService;
    }
    async createDiscussion(createDiscussionDto, req) {
        const { UserId, UserType } = req.session;
        if (!UserId) {
            throw new common_1.UnauthorizedException('User not logged in');
        }
        if (UserType !== 'Parents') {
            throw new common_1.UnauthorizedException('Only parents can create discussions');
        }
        return this.discussionService.createDiscussion(createDiscussionDto, UserId);
    }
    async getAllDiscussions() {
        return this.discussionService.findAll();
    }
    async getDiscussionById(dID) {
        return this.discussionService.findOne(dID);
    }
    async updateDiscussion(dID, updateDiscussionDto, req) {
        const { UserId, UserType } = req.session;
        if (!UserId) {
            throw new common_1.UnauthorizedException('User not logged in');
        }
        if (UserType !== 'Parents') {
            throw new common_1.ForbiddenException('User not authorized');
        }
        return this.discussionService.updateDiscussion(dID, updateDiscussionDto, UserId);
    }
    async deleteDiscussion(dID, req) {
        const { UserId, UserType } = req.session;
        if (!UserId) {
            throw new common_1.UnauthorizedException('User not logged in');
        }
        if (UserType !== 'Parents') {
            throw new common_1.ForbiddenException('User not authorized');
        }
        return this.discussionService.deleteDiscussion(dID, UserId);
    }
};
exports.DiscussionController = DiscussionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discussion_dto_1.CreateDiscussionDto, Object]),
    __metadata("design:returntype", Promise)
], DiscussionController.prototype, "createDiscussion", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DiscussionController.prototype, "getAllDiscussions", null);
__decorate([
    (0, common_1.Get)(':dID'),
    __param(0, (0, common_1.Param)('dID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DiscussionController.prototype, "getDiscussionById", null);
__decorate([
    (0, common_1.Patch)(':dID'),
    __param(0, (0, common_1.Param)('dID')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, discussion_dto_1.UpdateDiscussionDto, Object]),
    __metadata("design:returntype", Promise)
], DiscussionController.prototype, "updateDiscussion", null);
__decorate([
    (0, common_1.Delete)(':dID'),
    __param(0, (0, common_1.Param)('dID')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DiscussionController.prototype, "deleteDiscussion", null);
exports.DiscussionController = DiscussionController = __decorate([
    (0, common_1.Controller)('discussions'),
    __metadata("design:paramtypes", [discussion_service_1.DiscussionService])
], DiscussionController);
//# sourceMappingURL=discussion.controller.js.map
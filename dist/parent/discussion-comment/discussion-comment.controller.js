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
exports.DiscussionCommentController = void 0;
const common_1 = require("@nestjs/common");
const discussion_comment_service_1 = require("./discussion-comment.service");
const discussion_comment_dto_1 = require("./discussion-comment.dto");
let DiscussionCommentController = class DiscussionCommentController {
    constructor(discussionCommentService) {
        this.discussionCommentService = discussionCommentService;
    }
    async createDiscussionComment(createDiscussionCommentDto, req) {
        const { UserId, UserType } = req.session;
        if (!UserId) {
            throw new common_1.UnauthorizedException('User not logged in');
        }
        if (UserType !== 'Parents') {
            throw new common_1.UnauthorizedException('Only parents can post comments');
        }
        return this.discussionCommentService.createDiscussionComment(createDiscussionCommentDto, UserId);
    }
    async getAllComments() {
        return this.discussionCommentService.findAll();
    }
    async getCommentById(dcID) {
        return this.discussionCommentService.findOne(dcID);
    }
    async updateDiscussionComment(dcID, updateDiscussionCommentDto, req) {
        const { UserId, UserType } = req.session;
        if (!UserId) {
            throw new common_1.UnauthorizedException('User not logged in');
        }
        if (UserType !== 'Parents') {
            throw new common_1.ForbiddenException('User not authorized');
        }
        return this.discussionCommentService.updateDiscussionComment(dcID, updateDiscussionCommentDto, UserId);
    }
    async deleteDiscussionComment(dcID, req) {
        const { UserId, UserType } = req.session;
        if (!UserId) {
            throw new common_1.UnauthorizedException('User not logged in');
        }
        if (UserType !== 'Parents') {
            throw new common_1.ForbiddenException('User not authorized');
        }
        return this.discussionCommentService.deleteDiscussionComment(dcID, UserId);
    }
};
exports.DiscussionCommentController = DiscussionCommentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discussion_comment_dto_1.CreateDiscussionCommentDto, Object]),
    __metadata("design:returntype", Promise)
], DiscussionCommentController.prototype, "createDiscussionComment", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DiscussionCommentController.prototype, "getAllComments", null);
__decorate([
    (0, common_1.Get)(':dcID'),
    __param(0, (0, common_1.Param)('dcID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DiscussionCommentController.prototype, "getCommentById", null);
__decorate([
    (0, common_1.Patch)(':dcID'),
    __param(0, (0, common_1.Param)('dcID')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, discussion_comment_dto_1.UpdateDiscussionCommentDto, Object]),
    __metadata("design:returntype", Promise)
], DiscussionCommentController.prototype, "updateDiscussionComment", null);
__decorate([
    (0, common_1.Delete)(':dcID'),
    __param(0, (0, common_1.Param)('dcID')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DiscussionCommentController.prototype, "deleteDiscussionComment", null);
exports.DiscussionCommentController = DiscussionCommentController = __decorate([
    (0, common_1.Controller)('discussion-comments'),
    __metadata("design:paramtypes", [discussion_comment_service_1.DiscussionCommentService])
], DiscussionCommentController);
//# sourceMappingURL=discussion-comment.controller.js.map
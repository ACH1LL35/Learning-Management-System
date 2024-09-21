"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscussionCommentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const discussion_comment_entity_1 = require("./discussion-comment.entity");
const discussion_comment_service_1 = require("./discussion-comment.service");
const discussion_comment_controller_1 = require("./discussion-comment.controller");
const user_entity_1 = require("../../user/user.entity");
const discussion_entity_1 = require("../discussion/discussion.entity");
let DiscussionCommentModule = class DiscussionCommentModule {
};
exports.DiscussionCommentModule = DiscussionCommentModule;
exports.DiscussionCommentModule = DiscussionCommentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([discussion_comment_entity_1.DiscussionComment, user_entity_1.User, discussion_entity_1.Discussion])],
        providers: [discussion_comment_service_1.DiscussionCommentService],
        controllers: [discussion_comment_controller_1.DiscussionCommentController],
        exports: [discussion_comment_service_1.DiscussionCommentService],
    })
], DiscussionCommentModule);
//# sourceMappingURL=discussion-comment.module.js.map
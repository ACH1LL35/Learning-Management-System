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
exports.DiscussionCommentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const discussion_comment_entity_1 = require("./discussion-comment.entity");
const user_entity_1 = require("../../user/user.entity");
const discussion_entity_1 = require("../discussion/discussion.entity");
let DiscussionCommentService = class DiscussionCommentService {
    constructor(discussionCommentRepository, discussionRepository, userRepository) {
        this.discussionCommentRepository = discussionCommentRepository;
        this.discussionRepository = discussionRepository;
        this.userRepository = userRepository;
    }
    async getUserById(UserID) {
        return this.userRepository.findOne({ where: { UserID } });
    }
    async createDiscussionComment(createDiscussionCommentDto, UserID) {
        const user = await this.getUserById(UserID);
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        const discussion = await this.discussionRepository.findOne({
            where: { dID: createDiscussionCommentDto.dID },
        });
        if (!discussion) {
            throw new common_1.UnauthorizedException('Discussion not found');
        }
        const comment = this.discussionCommentRepository.create({
            ...createDiscussionCommentDto,
            discussion,
            posted_By: user,
        });
        return this.discussionCommentRepository.save(comment);
    }
    async findAll() {
        return this.discussionCommentRepository.find({ relations: ['discussion'] });
    }
    async findOne(dcID) {
        const comment = await this.discussionCommentRepository.findOne({
            where: { dcID },
            relations: ['discussion'],
        });
        if (!comment) {
            throw new common_1.UnauthorizedException('Comment not found');
        }
        return comment;
    }
    async updateDiscussionComment(dcID, updateDiscussionCommentDto, userID) {
        const comment = await this.discussionCommentRepository.findOne({ where: { dcID }, relations: ['posted_By'] });
        if (!comment) {
            throw new common_1.NotFoundException('Comment not found');
        }
        if (comment.posted_By.UserID !== userID) {
            throw new common_1.UnauthorizedException('You can only edit your own comments');
        }
        comment.dcComment = updateDiscussionCommentDto.dcComment || comment.dcComment;
        comment.edited = true;
        comment.last_edited = new Date();
        await this.discussionCommentRepository.save(comment);
        return comment;
    }
    async deleteDiscussionComment(dcID, userID) {
        const comment = await this.discussionCommentRepository.findOne({ where: { dcID }, relations: ['posted_By'] });
        if (!comment) {
            throw new common_1.NotFoundException('Comment not found');
        }
        if (comment.posted_By.UserID !== userID) {
            throw new common_1.UnauthorizedException('You can only delete your own comments');
        }
        await this.discussionCommentRepository.remove(comment);
    }
};
exports.DiscussionCommentService = DiscussionCommentService;
exports.DiscussionCommentService = DiscussionCommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(discussion_comment_entity_1.DiscussionComment)),
    __param(1, (0, typeorm_1.InjectRepository)(discussion_entity_1.Discussion)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], DiscussionCommentService);
//# sourceMappingURL=discussion-comment.service.js.map
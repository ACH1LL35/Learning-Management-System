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
exports.DiscussionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const discussion_entity_1 = require("./discussion.entity");
const user_entity_1 = require("../../user/user.entity");
let DiscussionService = class DiscussionService {
    constructor(discussionRepository, userRepository) {
        this.discussionRepository = discussionRepository;
        this.userRepository = userRepository;
    }
    async getUserById(UserID) {
        return this.userRepository.findOne({ where: { UserID } });
    }
    async createDiscussion(createDiscussionDto, UserID) {
        const user = await this.getUserById(UserID);
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        const discussion = this.discussionRepository.create({
            ...createDiscussionDto,
            posted_By: user,
        });
        return this.discussionRepository.save(discussion);
    }
    async findAll() {
        return this.discussionRepository.find({ relations: ['comments'] });
    }
    async findOne(dID) {
        const discussion = await this.discussionRepository.findOne({
            where: { dID },
            relations: ['comments'],
        });
        if (!discussion) {
            throw new common_1.UnauthorizedException('Discussion not found');
        }
        return discussion;
    }
    async updateDiscussion(dID, updateDiscussionDto, userID) {
        const discussion = await this.discussionRepository.findOne({ where: { dID }, relations: ['posted_By'] });
        if (!discussion) {
            throw new common_1.NotFoundException('Discussion not found');
        }
        if (discussion.posted_By.UserID !== userID) {
            throw new common_1.UnauthorizedException('You can only edit your own discussions');
        }
        discussion.dtopic = updateDiscussionDto.dtopic || discussion.dtopic;
        discussion.dDesc = updateDiscussionDto.ddesc || discussion.dDesc;
        discussion.edited = true;
        discussion.last_edited = new Date();
        await this.discussionRepository.save(discussion);
        return discussion;
    }
    async deleteDiscussion(dID, userID) {
        const discussion = await this.discussionRepository.findOne({ where: { dID }, relations: ['posted_By'] });
        if (!discussion) {
            throw new common_1.NotFoundException('Discussion not found');
        }
        if (discussion.posted_By.UserID !== userID) {
            throw new common_1.UnauthorizedException('You can only delete your own discussions');
        }
        await this.discussionRepository.remove(discussion);
    }
};
exports.DiscussionService = DiscussionService;
exports.DiscussionService = DiscussionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(discussion_entity_1.Discussion)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], DiscussionService);
//# sourceMappingURL=discussion.service.js.map
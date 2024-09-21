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
exports.FeedbackService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const feedback_entity_1 = require("./feedback.entity");
const user_entity_1 = require("../user/user.entity");
let FeedbackService = class FeedbackService {
    constructor(feedbackRepository, userRepository) {
        this.feedbackRepository = feedbackRepository;
        this.userRepository = userRepository;
    }
    async create(userId, createFeedbackDto, userType) {
        const user = await this.userRepository.findOne({ where: { UserID: userId } });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid user');
        }
        if (userType !== 'Student' && userType !== 'Instructor' && userType !== 'Parent') {
            throw new common_1.UnauthorizedException('You must be logged in as a student, instructor, or parent to create feedback');
        }
        const feedback = new feedback_entity_1.Feedback();
        feedback.User = user;
        feedback.FeedbackContent = createFeedbackDto.FeedbackContent;
        feedback.FeedbackDate = new Date();
        return this.feedbackRepository.save(feedback);
    }
    async getAll() {
        return this.feedbackRepository.find({ relations: ['User'] });
    }
};
exports.FeedbackService = FeedbackService;
exports.FeedbackService = FeedbackService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(feedback_entity_1.Feedback)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], FeedbackService);
//# sourceMappingURL=feedback.service.js.map
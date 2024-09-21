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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscussionComment = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/user.entity");
const discussion_entity_1 = require("../discussion/discussion.entity");
let DiscussionComment = class DiscussionComment {
};
exports.DiscussionComment = DiscussionComment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DiscussionComment.prototype, "dcID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => discussion_entity_1.Discussion),
    (0, typeorm_1.JoinColumn)({ name: 'dID' }),
    __metadata("design:type", discussion_entity_1.Discussion)
], DiscussionComment.prototype, "discussion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DiscussionComment.prototype, "dcComment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], DiscussionComment.prototype, "date_posted", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], DiscussionComment.prototype, "edited", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], DiscussionComment.prototype, "last_edited", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'posted_By' }),
    __metadata("design:type", user_entity_1.User)
], DiscussionComment.prototype, "posted_By", void 0);
exports.DiscussionComment = DiscussionComment = __decorate([
    (0, typeorm_1.Entity)()
], DiscussionComment);
//# sourceMappingURL=discussion-comment.entity.js.map
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
exports.Discussion = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/user.entity");
const discussion_comment_entity_1 = require("../discussion-comment/discussion-comment.entity");
let Discussion = class Discussion {
};
exports.Discussion = Discussion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Discussion.prototype, "dID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Discussion.prototype, "dtopic", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Discussion.prototype, "dDesc", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Discussion.prototype, "date_posted", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Discussion.prototype, "edited", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ nullable: true }),
    __metadata("design:type", Date)
], Discussion.prototype, "last_edited", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'posted_By' }),
    __metadata("design:type", user_entity_1.User)
], Discussion.prototype, "posted_By", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => discussion_comment_entity_1.DiscussionComment, (comment) => comment.discussion),
    __metadata("design:type", Array)
], Discussion.prototype, "comments", void 0);
exports.Discussion = Discussion = __decorate([
    (0, typeorm_1.Entity)()
], Discussion);
//# sourceMappingURL=discussion.entity.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscussionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const discussion_entity_1 = require("./discussion.entity");
const discussion_service_1 = require("./discussion.service");
const discussion_controller_1 = require("./discussion.controller");
const user_entity_1 = require("../../user/user.entity");
let DiscussionModule = class DiscussionModule {
};
exports.DiscussionModule = DiscussionModule;
exports.DiscussionModule = DiscussionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([discussion_entity_1.Discussion, user_entity_1.User])],
        providers: [discussion_service_1.DiscussionService],
        controllers: [discussion_controller_1.DiscussionController],
        exports: [discussion_service_1.DiscussionService],
    })
], DiscussionModule);
//# sourceMappingURL=discussion.module.js.map
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
exports.FAQController = void 0;
const common_1 = require("@nestjs/common");
const faq_service_1 = require("./faq.service");
const faq_dto_1 = require("./faq.dto");
let FAQController = class FAQController {
    constructor(faqService) {
        this.faqService = faqService;
    }
    async create(createFAQDto, session) {
        const { UserType } = session;
        return this.faqService.create(createFAQDto);
    }
    async update(id, updateFAQDto, session) {
        const { UserType } = session;
        return this.faqService.update(id, updateFAQDto, UserType);
    }
    async delete(id, session) {
        const { UserType } = session;
        return this.faqService.delete(id, UserType);
    }
    async getAll() {
        return this.faqService.getAllFAQs();
    }
};
exports.FAQController = FAQController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [faq_dto_1.CreateFAQDto, Object]),
    __metadata("design:returntype", Promise)
], FAQController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, faq_dto_1.UpdateFAQDto, Object]),
    __metadata("design:returntype", Promise)
], FAQController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FAQController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FAQController.prototype, "getAll", null);
exports.FAQController = FAQController = __decorate([
    (0, common_1.Controller)('faq'),
    __metadata("design:paramtypes", [faq_service_1.FAQService])
], FAQController);
//# sourceMappingURL=faq.controller.js.map
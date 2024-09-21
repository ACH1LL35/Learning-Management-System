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
exports.FAQService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const faq_entity_1 = require("./faq.entity");
let FAQService = class FAQService {
    constructor(faqRepository) {
        this.faqRepository = faqRepository;
    }
    async create(createFAQDto) {
        const faq = this.faqRepository.create(createFAQDto);
        return this.faqRepository.save(faq);
    }
    async update(faqId, updateFAQDto, userType) {
        const faq = await this.faqRepository.findOne({ where: { FAQID: faqId } });
        if (!faq) {
            throw new common_1.BadRequestException(`FAQ with ID ${faqId} not found`);
        }
        if (userType !== 'Admin') {
            throw new common_1.UnauthorizedException('You must be logged in as an admin to update FAQ details');
        }
        Object.assign(faq, updateFAQDto);
        return this.faqRepository.save(faq);
    }
    async delete(faqId, userType) {
        const faq = await this.faqRepository.findOne({ where: { FAQID: faqId } });
        if (!faq) {
            throw new common_1.BadRequestException(`FAQ with ID ${faqId} not found`);
        }
        if (userType !== 'Admin') {
            throw new common_1.UnauthorizedException('You must be logged in as an admin to delete FAQs');
        }
        await this.faqRepository.remove(faq);
    }
    async getAllFAQs() {
        return this.faqRepository.find();
    }
};
exports.FAQService = FAQService;
exports.FAQService = FAQService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(faq_entity_1.FAQ)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FAQService);
//# sourceMappingURL=faq.service.js.map
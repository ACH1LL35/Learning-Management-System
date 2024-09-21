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
exports.ParentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mailer_1 = require("@nestjs-modules/mailer");
const parent_entity_1 = require("./parent.entity");
let ParentService = class ParentService {
    constructor(parentRepository, mailerService) {
        this.parentRepository = parentRepository;
        this.mailerService = mailerService;
    }
    async create(parentDto) {
        const parent = this.parentRepository.create(parentDto);
        const savedParent = await this.parentRepository.save(parent);
        await this.sendRegistrationEmail(savedParent.Email);
        return savedParent;
    }
    async update(id, updateParentDto, sessionParentId) {
        const parent = await this.parentRepository.findOne({ where: { ParentsID: id } });
        if (!parent) {
            throw new common_1.BadRequestException(`Parent with ID ${id} not found`);
        }
        if (parent.ParentsID !== sessionParentId) {
            throw new common_1.UnauthorizedException('You are not authorized to perform this action');
        }
        Object.assign(parent, updateParentDto);
        return this.parentRepository.save(parent);
    }
    async findByEmailAndPassword(email, password) {
        return this.parentRepository.findOne({ where: { Email: email, Password: password } });
    }
    async sendRegistrationEmail(email) {
        await this.mailerService.sendMail({
            to: email,
            subject: 'Registration Confirmation',
            text: 'Thank you for registering with us!',
            html: '<b>Thank you for registering with us!</b>',
        });
    }
};
exports.ParentService = ParentService;
exports.ParentService = ParentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(parent_entity_1.Parent)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        mailer_1.MailerService])
], ParentService);
//# sourceMappingURL=parent.service.js.map
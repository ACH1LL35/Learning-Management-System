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
var ParentController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentController = void 0;
const common_1 = require("@nestjs/common");
const parent_service_1 = require("./parent.service");
const parent_dto_1 = require("./parent.dto");
const mailer_1 = require("@nestjs-modules/mailer");
let ParentController = ParentController_1 = class ParentController {
    constructor(parentService, mailerService) {
        this.parentService = parentService;
        this.mailerService = mailerService;
        this.logger = new common_1.Logger(ParentController_1.name);
    }
    async create(createParentDto) {
        const createdParent = await this.parentService.create(createParentDto);
        try {
            await this.sendRegistrationEmail(createdParent.Email);
        }
        catch (error) {
            this.logger.error(`Failed to send registration email to ${createdParent.Email}`, error.stack);
        }
        return { message: 'Profile created successfully / registration complete', parent: createdParent };
    }
    async update(id, updateParentDto, session) {
        const sessionParentId = parseInt(session.parentId);
        const updatedParent = await this.parentService.update(id, updateParentDto, sessionParentId);
        try {
            await this.sendProfileUpdatedEmail(updatedParent.Email);
        }
        catch (error) {
            this.logger.error(`Failed to send profile updated email to ${updatedParent.Email}`, error.stack);
        }
        return { message: 'Profile edited successfully', parent: updatedParent };
    }
    async login(credentials, session) {
        const { email, password } = credentials;
        const parent = await this.parentService.findByEmailAndPassword(email, password);
        if (!parent) {
            throw new common_1.BadRequestException('Invalid email or password');
        }
        session.parentId = parent.ParentsID.toString();
        return { message: 'Login successful', parent };
    }
    logout(session) {
        session.destroy();
        return { message: 'Logged out successfully' };
    }
    async sendRegistrationEmail(email) {
        await this.mailerService.sendMail({
            to: email,
            subject: 'Welcome to Our Platform',
            text: 'Thank you for registering as a parent on our platform.',
        });
    }
    async sendProfileUpdatedEmail(email) {
        await this.mailerService.sendMail({
            to: email,
            subject: 'Profile Update Notification',
            text: 'Some of your information of your profile on our platform was changed.',
        });
    }
};
exports.ParentController = ParentController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [parent_dto_1.ParentDto]),
    __metadata("design:returntype", Promise)
], ParentController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, parent_dto_1.UpdateParentDto, Object]),
    __metadata("design:returntype", Promise)
], ParentController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ParentController.prototype, "login", null);
__decorate([
    (0, common_1.Delete)('logout'),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ParentController.prototype, "logout", null);
exports.ParentController = ParentController = ParentController_1 = __decorate([
    (0, common_1.Controller)('parents'),
    __metadata("design:paramtypes", [parent_service_1.ParentService,
        mailer_1.MailerService])
], ParentController);
//# sourceMappingURL=parent.controller.js.map
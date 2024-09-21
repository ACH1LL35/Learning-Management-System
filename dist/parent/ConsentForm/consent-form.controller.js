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
exports.ConsentFormController = void 0;
const common_1 = require("@nestjs/common");
const consent_form_service_1 = require("./consent-form.service");
const consent_form_dto_1 = require("./consent-form.dto");
const platform_express_1 = require("@nestjs/platform-express");
const path = require("path");
const fs = require("fs");
let ConsentFormController = class ConsentFormController {
    constructor(consentFormService) {
        this.consentFormService = consentFormService;
    }
    async create(consentFormDto, file, req) {
        const { UserId, UserType } = req.session;
        if (!UserId) {
            throw new common_1.UnauthorizedException('User not logged in');
        }
        if (UserType !== 'Parents') {
            throw new common_1.ForbiddenException('User not authorized');
        }
        return this.consentFormService.create(consentFormDto, file, UserId);
    }
    async delete(consentFormID, req) {
        const { UserId, UserType } = req.session;
        if (!UserId) {
            throw new common_1.UnauthorizedException('User not logged in');
        }
        if (UserType !== 'Parents') {
            throw new common_1.ForbiddenException('User not authorized');
        }
        await this.consentFormService.delete(consentFormID);
    }
    async view(consentFormID, res, req) {
        const { UserId, UserType } = req.session;
        if (!UserId) {
            throw new common_1.UnauthorizedException('User not logged in');
        }
        if (UserType !== 'Parents') {
            throw new common_1.ForbiddenException('User not authorized');
        }
        const consentForm = await this.consentFormService.findOne(consentFormID);
        if (!consentForm) {
            res.status(404).send('Consent Form not found');
            return;
        }
        const filePath = path.resolve(consentForm.FilePath);
        if (!fs.existsSync(filePath)) {
            res.status(404).send('File not found');
            return;
        }
        res.sendFile(filePath);
    }
};
exports.ConsentFormController = ConsentFormController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [consent_form_dto_1.ConsentFormDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ConsentFormController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ConsentFormController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(':id/view'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], ConsentFormController.prototype, "view", null);
exports.ConsentFormController = ConsentFormController = __decorate([
    (0, common_1.Controller)('consent-forms'),
    __metadata("design:paramtypes", [consent_form_service_1.ConsentFormService])
], ConsentFormController);
//# sourceMappingURL=consent-form.controller.js.map
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
exports.EvaluationFormController = void 0;
const common_1 = require("@nestjs/common");
const evaluation_form_service_1 = require("./evaluation-form.service");
const evaluation_form_dto_1 = require("./evaluation-form.dto");
const platform_express_1 = require("@nestjs/platform-express");
const path = require("path");
const fs = require("fs");
let EvaluationFormController = class EvaluationFormController {
    constructor(evaluationFormService) {
        this.evaluationFormService = evaluationFormService;
    }
    async create(evaluationFormDto, file) {
        return this.evaluationFormService.create(evaluationFormDto, file);
    }
    async delete(evaluationFormID) {
        await this.evaluationFormService.delete(evaluationFormID);
    }
    async view(evaluationFormID, res) {
        const evaluationForm = await this.evaluationFormService.findOne(evaluationFormID);
        if (!evaluationForm) {
            res.status(404).send('Evaluation Form not found');
            return;
        }
        const filePath = path.resolve(evaluationForm.FilePath);
        if (!fs.existsSync(filePath)) {
            res.status(404).send('File not found');
            return;
        }
        res.sendFile(filePath);
    }
};
exports.EvaluationFormController = EvaluationFormController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluation_form_dto_1.EvaluationFormDto, Object]),
    __metadata("design:returntype", Promise)
], EvaluationFormController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EvaluationFormController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(':id/view'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EvaluationFormController.prototype, "view", null);
exports.EvaluationFormController = EvaluationFormController = __decorate([
    (0, common_1.Controller)('evaluation-forms'),
    __metadata("design:paramtypes", [evaluation_form_service_1.EvaluationFormService])
], EvaluationFormController);
//# sourceMappingURL=evaluation-form.controller.js.map
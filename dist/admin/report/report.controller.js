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
exports.ReportingController = void 0;
const common_1 = require("@nestjs/common");
const report_service_1 = require("./report.service");
const report_dto_1 = require("./report.dto");
const platform_express_1 = require("@nestjs/platform-express");
const path = require("path");
const fs = require("fs");
let ReportingController = class ReportingController {
    constructor(reportingService) {
        this.reportingService = reportingService;
    }
    async create(reportDto, file) {
        return this.reportingService.create(reportDto, file);
    }
    async delete(reportID) {
        await this.reportingService.delete(reportID);
    }
    async view(reportID, res) {
        const report = await this.reportingService.findOne(reportID);
        if (!report) {
            res.status(404).send('Report not found');
            return;
        }
        const filePath = path.resolve(report.FilePath);
        if (!fs.existsSync(filePath)) {
            res.status(404).send('File not found');
            return;
        }
        res.sendFile(filePath);
    }
};
exports.ReportingController = ReportingController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_dto_1.ReportDto, Object]),
    __metadata("design:returntype", Promise)
], ReportingController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReportingController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(':id/view'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ReportingController.prototype, "view", null);
exports.ReportingController = ReportingController = __decorate([
    (0, common_1.Controller)('reports'),
    __metadata("design:paramtypes", [report_service_1.ReportingService])
], ReportingController);
//# sourceMappingURL=report.controller.js.map
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
exports.ReportingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const report_entity_1 = require("./report.entity");
const fs = require("fs");
const path = require("path");
const fs_1 = require("fs");
let ReportingService = class ReportingService {
    constructor(reportingRepository) {
        this.reportingRepository = reportingRepository;
    }
    async create(reportDto, file) {
        const { ReportName, Description, ReportDate, GeneratedBy } = reportDto;
        const uploadPath = './uploads/reports/';
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        const fileName = `${Date.now()}-${file.originalname}`;
        const filePath = path.join(uploadPath, fileName);
        await new Promise((resolve, reject) => {
            const fileStream = (0, fs_1.createWriteStream)(filePath);
            fileStream.on('error', error => reject(error));
            fileStream.on('finish', () => resolve());
            fileStream.end(file.buffer);
        });
        const reporting = this.reportingRepository.create({
            ReportName,
            Description,
            ReportDate,
            GeneratedBy,
            FilePath: filePath,
        });
        return this.reportingRepository.save(reporting);
    }
    async delete(reportID) {
        const reporting = await this.reportingRepository.findOne({ where: { ReportID: reportID } });
        if (!reporting) {
            throw new common_1.NotFoundException(`Report with ID ${reportID} not found`);
        }
        if (reporting.FilePath) {
            fs.unlinkSync(reporting.FilePath);
        }
        await this.reportingRepository.delete(reportID);
    }
    async findOne(reportID) {
        const report = await this.reportingRepository.findOne({ where: { ReportID: reportID } });
        if (!report) {
            throw new common_1.NotFoundException(`Report with ID ${reportID} not found`);
        }
        return report;
    }
};
exports.ReportingService = ReportingService;
exports.ReportingService = ReportingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(report_entity_1.Reporting)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReportingService);
//# sourceMappingURL=report.service.js.map
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
exports.EvaluationFormService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const evaluation_form_entity_1 = require("./evaluation-form.entity");
const fs = require("fs");
const path = require("path");
const fs_1 = require("fs");
let EvaluationFormService = class EvaluationFormService {
    constructor(evaluationFormRepository) {
        this.evaluationFormRepository = evaluationFormRepository;
    }
    async create(evaluationFormDto, file) {
        const { FormName, Description, FormDate, EvaluatedBy } = evaluationFormDto;
        const uploadPath = './uploads/evaluation-forms/';
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
        const evaluationForm = this.evaluationFormRepository.create({
            FormName,
            Description,
            FormDate,
            EvaluatedBy,
            FilePath: filePath,
        });
        return this.evaluationFormRepository.save(evaluationForm);
    }
    async delete(evaluationFormID) {
        const evaluationForm = await this.evaluationFormRepository.findOne({ where: { FormID: evaluationFormID } });
        if (!evaluationForm) {
            throw new common_1.NotFoundException(`Evaluation Form with ID ${evaluationFormID} not found`);
        }
        if (evaluationForm.FilePath) {
            fs.unlinkSync(evaluationForm.FilePath);
        }
        await this.evaluationFormRepository.delete(evaluationFormID);
    }
    async findOne(evaluationFormID) {
        const evaluationForm = await this.evaluationFormRepository.findOne({ where: { FormID: evaluationFormID } });
        if (!evaluationForm) {
            throw new common_1.NotFoundException(`Evaluation Form with ID ${evaluationFormID} not found`);
        }
        return evaluationForm;
    }
};
exports.EvaluationFormService = EvaluationFormService;
exports.EvaluationFormService = EvaluationFormService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(evaluation_form_entity_1.EvaluationForm)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EvaluationFormService);
//# sourceMappingURL=evaluation-form.service.js.map
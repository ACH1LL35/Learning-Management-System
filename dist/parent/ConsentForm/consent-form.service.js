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
exports.ConsentFormService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const consent_form_entity_1 = require("./consent-form.entity");
const fs = require("fs");
const path = require("path");
const fs_1 = require("fs");
let ConsentFormService = class ConsentFormService {
    constructor(consentFormRepository) {
        this.consentFormRepository = consentFormRepository;
    }
    async create(consentFormDto, file, userID) {
        const { FormName, Description, FormDate, CollectedBy } = consentFormDto;
        const uploadPath = './uploads/consent-forms/';
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
        const consentForm = this.consentFormRepository.create({
            FormName,
            Description,
            FormDate,
            CollectedBy,
            FilePath: filePath,
            UserID: userID,
        });
        return this.consentFormRepository.save(consentForm);
    }
    async delete(consentFormID) {
        const consentForm = await this.consentFormRepository.findOne({ where: { FormID: consentFormID } });
        if (!consentForm) {
            throw new common_1.NotFoundException(`Consent Form with ID ${consentFormID} not found`);
        }
        if (consentForm.FilePath) {
            fs.unlinkSync(consentForm.FilePath);
        }
        await this.consentFormRepository.delete(consentFormID);
    }
    async findOne(consentFormID) {
        const consentForm = await this.consentFormRepository.findOne({ where: { FormID: consentFormID } });
        if (!consentForm) {
            throw new common_1.NotFoundException(`Consent Form with ID ${consentFormID} not found`);
        }
        return consentForm;
    }
};
exports.ConsentFormService = ConsentFormService;
exports.ConsentFormService = ConsentFormService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(consent_form_entity_1.ConsentForm)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ConsentFormService);
//# sourceMappingURL=consent-form.service.js.map
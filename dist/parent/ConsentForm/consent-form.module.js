"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentFormModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const consent_form_service_1 = require("./consent-form.service");
const consent_form_controller_1 = require("./consent-form.controller");
const consent_form_entity_1 = require("./consent-form.entity");
let ConsentFormModule = class ConsentFormModule {
};
exports.ConsentFormModule = ConsentFormModule;
exports.ConsentFormModule = ConsentFormModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([consent_form_entity_1.ConsentForm])],
        controllers: [consent_form_controller_1.ConsentFormController],
        providers: [consent_form_service_1.ConsentFormService],
    })
], ConsentFormModule);
//# sourceMappingURL=consent-form.module.js.map
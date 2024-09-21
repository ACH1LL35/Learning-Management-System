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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildManagement = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/user.entity");
let ChildManagement = class ChildManagement {
};
exports.ChildManagement = ChildManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ChildManagement.prototype, "cid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ChildManagement.prototype, "date_added", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.JoinColumn)({ name: 'StudentID' }),
    __metadata("design:type", Number)
], ChildManagement.prototype, "StudentID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'ParentID' }),
    __metadata("design:type", user_entity_1.User)
], ChildManagement.prototype, "Parent", void 0);
exports.ChildManagement = ChildManagement = __decorate([
    (0, typeorm_1.Entity)()
], ChildManagement);
//# sourceMappingURL=child-management.entity.js.map
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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const user_entity_1 = require("./user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findByUsername(username) {
        return this.userRepository.findOne({ where: { Username: username } });
    }
    async hashPassword(password) {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    }
    async comparePasswords(plainTextPassword, hashedPassword) {
        if (!plainTextPassword || !hashedPassword) {
            throw new common_1.BadRequestException('Password or hashed password missing');
        }
        return await bcrypt.compare(plainTextPassword, hashedPassword);
    }
    async create(userDto) {
        userDto.Password = await this.hashPassword(userDto.Password);
        const user = this.userRepository.create(userDto);
        return this.userRepository.save(user);
    }
    async update(id, updateUserDto, sessionUserId) {
        const user = await this.userRepository.findOne({ where: { UserID: id } });
        if (!user) {
            throw new common_1.BadRequestException(`User with ID ${id} not found`);
        }
        if (user.UserID !== sessionUserId) {
            throw new common_1.UnauthorizedException('You are not authorized to perform this action');
        }
        if (updateUserDto.Password) {
            updateUserDto.Password = await this.hashPassword(updateUserDto.Password);
        }
        Object.assign(user, updateUserDto);
        return this.userRepository.save(user);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map
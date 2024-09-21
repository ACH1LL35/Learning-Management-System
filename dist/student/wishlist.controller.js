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
exports.WishlistController = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
const student_entity_1 = require("./student.entity");
let WishlistController = class WishlistController {
    constructor(wishlistService) {
        this.wishlistService = wishlistService;
    }
    async getAllWishlist() {
        return await this.wishlistService.getAllWishlist();
    }
    async createWishlist(wishlist) {
        return await this.wishlistService.createWishlist(wishlist);
    }
    async updateWishlist(id, wishlist) {
        return await this.wishlistService.updateWishlist(id, wishlist);
    }
    async deleteWishlist(id) {
        await this.wishlistService.deleteWishlist(id);
    }
};
exports.WishlistController = WishlistController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WishlistController.prototype, "getAllWishlist", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_entity_1.Wishlist]),
    __metadata("design:returntype", Promise)
], WishlistController.prototype, "createWishlist", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, student_entity_1.Wishlist]),
    __metadata("design:returntype", Promise)
], WishlistController.prototype, "updateWishlist", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WishlistController.prototype, "deleteWishlist", null);
exports.WishlistController = WishlistController = __decorate([
    (0, common_1.Controller)('wishlist'),
    __metadata("design:paramtypes", [student_service_1.WishlistService])
], WishlistController);
//# sourceMappingURL=wishlist.controller.js.map
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { WishlistService } from "./student.service";
import { Wishlist } from "./student.entity";

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Get()
  async getAllWishlist(): Promise<Wishlist[]> {
    return await this.wishlistService.getAllWishlist();
  }

  @Post()
  async createWishlist(@Body() wishlist: Wishlist): Promise<Wishlist> {
    return await this.wishlistService.createWishlist(wishlist);
  }

  @Put(':id')
  async updateWishlist(@Param('id', ParseIntPipe) id: number, @Body() wishlist: Wishlist): Promise<Wishlist> {
    return await this.wishlistService.updateWishlist(id, wishlist);
  }

  @Delete(':id')
  async deleteWishlist(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.wishlistService.deleteWishlist(id);
  }
}

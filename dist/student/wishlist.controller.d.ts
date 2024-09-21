import { WishlistService } from "./student.service";
import { Wishlist } from "./student.entity";
export declare class WishlistController {
    private readonly wishlistService;
    constructor(wishlistService: WishlistService);
    getAllWishlist(): Promise<Wishlist[]>;
    createWishlist(wishlist: Wishlist): Promise<Wishlist>;
    updateWishlist(id: number, wishlist: Wishlist): Promise<Wishlist>;
    deleteWishlist(id: number): Promise<void>;
}

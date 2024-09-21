import { UserService } from './user.service';
import { UserDto, LoginDto } from './user.dto';
export declare class UserController {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService);
    create(createUserDto: UserDto): Promise<{
        message: string;
        user: import("./user.entity").User;
    }>;
    login(credentials: LoginDto, session: Record<string, any>): Promise<{
        message: string;
        user: import("./user.entity").User;
    }>;
    logout(session: Record<string, any>): {
        message: string;
    };
}

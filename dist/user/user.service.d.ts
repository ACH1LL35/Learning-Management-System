import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto, UpdateUserDto } from './user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findByUsername(username: string): Promise<User | undefined>;
    hashPassword(password: string): Promise<string>;
    comparePasswords(plainTextPassword: string, hashedPassword: string): Promise<boolean>;
    create(userDto: UserDto): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto, sessionUserId: number): Promise<User>;
}

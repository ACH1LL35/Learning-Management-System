import { Repository } from 'typeorm';
import { Admin } from './admin.entity';
import { CreateAdminDto, UpdateAdminDto } from './admin.dto';
export declare class AdminService {
    private readonly adminRepository;
    constructor(adminRepository: Repository<Admin>);
    create(createAdminDto: CreateAdminDto, userId: number): Promise<Admin>;
    update(adminId: number, updateAdminDto: UpdateAdminDto, sessionUserId: number): Promise<Admin>;
}

import { AdminService } from './admin.service';
import { CreateAdminDto, UpdateAdminDto } from './admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(createAdminDto: CreateAdminDto, session: Record<string, any>): Promise<{
        message: string;
        admin: import("./admin.entity").Admin;
    }>;
    update(id: number, updateAdminDto: UpdateAdminDto, session: Record<string, any>): Promise<{
        message: string;
        admin: import("./admin.entity").Admin;
    }>;
}

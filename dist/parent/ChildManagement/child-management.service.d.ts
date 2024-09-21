import { Repository } from 'typeorm';
import { ChildManagement } from './child-management.entity';
import { CreateChildManagementDto } from './child-management.dto';
import { User } from 'src/user/user.entity';
import { studentProfile } from 'src/student/student.entity';
export declare class ChildManagementService {
    private readonly childManagementRepository;
    private readonly userRepository;
    private readonly studentRepository;
    constructor(childManagementRepository: Repository<ChildManagement>, userRepository: Repository<User>, studentRepository: Repository<studentProfile>);
    getAllChildren(ParentsID: number): Promise<any[]>;
    addChild(createChildManagementDto: CreateChildManagementDto, parentId: number): Promise<ChildManagement>;
    removeChildById(cid: number, parentId: number): Promise<{
        message: string;
    }>;
}

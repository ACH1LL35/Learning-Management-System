import { ParentService } from './parent.service';
import { ParentDto, UpdateParentDto } from './parent.dto';
import { MailerService } from '@nestjs-modules/mailer';
export declare class ParentController {
    private readonly parentService;
    private readonly mailerService;
    private readonly logger;
    constructor(parentService: ParentService, mailerService: MailerService);
    create(createParentDto: ParentDto): Promise<{
        message: string;
        parent: import("./parent.entity").Parent;
    }>;
    update(id: number, updateParentDto: UpdateParentDto, session: Record<string, any>): Promise<{
        message: string;
        parent: import("./parent.entity").Parent;
    }>;
    login(credentials: {
        email: string;
        password: string;
    }, session: Record<string, any>): Promise<{
        message: string;
        parent: import("./parent.entity").Parent;
    }>;
    logout(session: Record<string, any>): {
        message: string;
    };
    private sendRegistrationEmail;
    private sendProfileUpdatedEmail;
}

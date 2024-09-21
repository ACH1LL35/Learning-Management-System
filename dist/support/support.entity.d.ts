import { User } from 'src/user/user.entity';
export declare class Support {
    SupportID: number;
    User: User;
    IssueType: string;
    IssueDescription: string;
    Resolution: string;
    SupportDate: Date;
}

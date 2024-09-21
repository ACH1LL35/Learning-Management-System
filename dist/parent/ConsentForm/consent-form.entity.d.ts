import { User } from 'src/user/user.entity';
export declare class ConsentForm {
    FormID: number;
    FormName: string;
    Description: string;
    FormDate: Date;
    CollectedBy: string;
    FilePath: string;
    user: User;
    UserID: number;
}

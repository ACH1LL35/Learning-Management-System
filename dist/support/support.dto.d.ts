export declare class CreateSupportDto {
    UserID: number;
    IssueType: string;
    IssueDescription: string;
    Resolution?: string;
    SupportDate: Date;
}
export declare class UpdateSupportDto {
    IssueType?: string;
    IssueDescription?: string;
    Resolution?: string;
    SupportDate?: Date;
}

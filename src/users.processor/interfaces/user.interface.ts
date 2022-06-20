export interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    isDeleted?: boolean;
    blockedUsers?: [String];
    appSettings?: string
}
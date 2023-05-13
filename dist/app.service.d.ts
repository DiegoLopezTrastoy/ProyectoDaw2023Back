import { UserService } from './user/user.service';
export declare class AppService {
    private usersevice;
    constructor(usersevice: UserService);
    executeSeed(): void;
    getHello(): string;
}

import { UserService } from './user/user.service';
import { AvisoService } from './vecinos/aviso/aviso.service';
export declare class AppService {
    private userSevice;
    private avisoService;
    constructor(userSevice: UserService, avisoService: AvisoService);
    executeSeed(): Promise<void>;
    getHello(): string;
}

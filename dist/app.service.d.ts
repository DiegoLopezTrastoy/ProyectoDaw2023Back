import { UserService } from './user/user.service';
import { AvisoService } from './vecinos/aviso/aviso.service';
import { VecinoService } from './vecinos/vecino/vecino.service';
export declare class AppService {
    private userSevice;
    private avisoService;
    private vecinoService;
    constructor(userSevice: UserService, avisoService: AvisoService, vecinoService: VecinoService);
    executeSeed(): Promise<void>;
    getHello(): string;
}

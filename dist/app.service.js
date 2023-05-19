"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user/user.service");
const aviso_service_1 = require("./vecinos/aviso/aviso.service");
const vecino_service_1 = require("./vecinos/vecino/vecino.service");
let AppService = class AppService {
    constructor(userSevice, avisoService, vecinoService) {
        this.userSevice = userSevice;
        this.avisoService = avisoService;
        this.vecinoService = vecinoService;
    }
    async executeSeed() {
        const user = await this.userSevice.create({ nombre: 'Diego', email: 'sondiegolt@gmail.com', fecha_nacimiento: '19/07/2003', num_telefono: 658679811, imagen: 'no_image.jpg' });
    }
    getHello() {
        return 'Hello World!';
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        aviso_service_1.AvisoService,
        vecino_service_1.VecinoService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map
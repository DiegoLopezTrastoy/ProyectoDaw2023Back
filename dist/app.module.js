"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const presidente_module_1 = require("./vecinos/presidente/presidente.module");
const vecino_module_1 = require("./vecinos/vecino/vecino.module");
const secretario_module_1 = require("./vecinos/secretario/secretario.module");
const comunidad_module_1 = require("./vecinos/comunidad/comunidad.module");
const reunion_module_1 = require("./vecinos/reunion/reunion.module");
const aviso_module_1 = require("./vecinos/aviso/aviso.module");
const tema_module_1 = require("./vecinos/tema/tema.module");
const ingreso_module_1 = require("./vecinos/ingreso/ingreso.module");
const gasto_module_1 = require("./vecinos/gasto/gasto.module");
const anfitrion_module_1 = require("./grupos/anfitrion/anfitrion.module");
const invitado_module_1 = require("./grupos/invitado/invitado.module");
const evento_module_1 = require("./grupos/evento/evento.module");
const grupo_module_1 = require("./grupos/grupo/grupo.module");
const votacion_module_1 = require("./grupos/votacion/votacion.module");
const opcion_module_1 = require("./grupos/opcion/opcion.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            presidente_module_1.PresidenteModule,
            vecino_module_1.VecinoModule,
            secretario_module_1.SecretarioModule,
            comunidad_module_1.ComunidadModule,
            reunion_module_1.ReunionModule,
            aviso_module_1.AvisoModule,
            votacion_module_1.VotacionModule,
            tema_module_1.TemaModule,
            ingreso_module_1.IngresoModule,
            gasto_module_1.GastoModule,
            anfitrion_module_1.AnfitrionModule,
            invitado_module_1.InvitadoModule,
            evento_module_1.EventoModule,
            grupo_module_1.GrupoModule,
            opcion_module_1.OpcionModule,
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DATABASE_HOST,
                port: Number(process.env.DATABASE_PORT),
                username: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
                dropSchema: false,
                synchronize: false,
                autoLoadEntities: true
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
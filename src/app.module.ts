import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PresidenteModule } from './vecinos/presidente/presidente.module';
import { VecinoModule } from './vecinos/vecino/vecino.module';
import { SecretarioModule } from './vecinos/secretario/secretario.module';
import { ComunidadModule } from './vecinos/comunidad/comunidad.module';
import { ReunionModule } from './vecinos/reunion/reunion.module';
import { AvisoModule } from './vecinos/aviso/aviso.module';
import { TemaModule } from './vecinos/tema/tema.module';
import { IngresoModule } from './vecinos/ingreso/ingreso.module';
import { GastoModule } from './vecinos/gasto/gasto.module';
import { AnfitrionModule } from './grupos/anfitrion/anfitrion.module';
import { InvitadoModule } from './grupos/invitado/invitado.module';
import { EventoModule } from './grupos/evento/evento.module';
import { GrupoModule } from './grupos/grupo/grupo.module';
import { VotacionModule } from './grupos/votacion/votacion.module';
import { OpcionModule } from './grupos/opcion/opcion.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ImageModule } from './image/image.module';

@Module({
  imports: [
    UserModule,
    PresidenteModule,
    VecinoModule,
    SecretarioModule,
    ComunidadModule,
    ReunionModule,
    AvisoModule,
    VotacionModule,
    TemaModule,
    IngresoModule,
    GastoModule,
    AnfitrionModule,
    InvitadoModule,
    EventoModule,
    GrupoModule,
    OpcionModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      dropSchema: false,
      synchronize: false,
      entities: ["dist/**/*.entity{.ts,.js}"]
      
    }),
    ImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

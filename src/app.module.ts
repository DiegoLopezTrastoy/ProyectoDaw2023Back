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
import { User } from './user/entities/user.entity';
import { Comunidad } from './vecinos/comunidad/entities/comunidad.entity';
import { Presidente } from './vecinos/presidente/entities/presidente.entity';
import { Secretario } from './vecinos/secretario/entities/secretario.entity';
import { Vecino } from './vecinos/vecino/entities/vecino.entity';
import { Aviso } from './vecinos/aviso/entities/aviso.entity';
import { Gasto } from './vecinos/gasto/entities/gasto.entity';
import { Ingreso } from './vecinos/ingreso/entities/ingreso.entity';
import { Reunion } from './vecinos/reunion/entities/reunion.entity';
import { Tema } from './vecinos/tema/entities/tema.entity';
import { Votacion } from './grupos/votacion/entities/votacion.entity';
import { Anfitrion } from './grupos/anfitrion/entities/anfitrion.entity';
import { Evento } from './grupos/evento/entities/evento.entity';
import { Grupo } from './grupos/grupo/entities/grupo.entity';
import { Invitado } from './grupos/invitado/entities/invitado.entity';
import { Opcion } from './grupos/opcion/entities/opcion.entity';

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
      entities: [
        User,
        Comunidad,
        Presidente,
        Secretario,
        Vecino,
        Aviso,
        Gasto,
        Ingreso,
        Reunion,
        Tema,
        Votacion,
        Anfitrion,
        Evento,
        Grupo,
        Invitado,
        Opcion,
        Votacion,
      ],
      dropSchema: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

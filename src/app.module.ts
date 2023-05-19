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
import { User } from './entities/user.entity';
import { Comunidad } from './entities/comunidad.entity';
import { Presidente } from './entities/presidente.entity';
import { Secretario } from './entities/secretario.entity';
import { Vecino } from './entities/vecino.entity';
import { Aviso } from './entities/aviso.entity';
import { Gasto } from './entities/gasto.entity';
import { Ingreso } from './entities/ingreso.entity';
import { Reunion } from './entities/reunion.entity';
import { Tema } from './entities/tema.entity';
import { VotacionGrupos } from './entities/votacionGrupos.entity';
import { Anfitrion } from './entities/anfitrion.entity';
import { Evento } from './entities/evento.entity';
import { Grupo } from './entities/grupo.entity';
import { Invitado } from './entities/invitado.entity';
import { Opcion } from './entities/opcion.entity';

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
      autoLoadEntities: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

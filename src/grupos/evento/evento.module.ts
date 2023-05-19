import { Module } from '@nestjs/common';
import { EventoService } from './evento.service';
import { EventoController } from './evento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from 'src/entities/evento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Evento])],
  exports: [EventoService],
  controllers: [EventoController],
  providers: [EventoService]
})
export class EventoModule {}

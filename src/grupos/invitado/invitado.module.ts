import { Module } from '@nestjs/common';
import { InvitadoService } from './invitado.service';
import { InvitadoController } from './invitado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invitado } from 'src/entities/invitado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Invitado])],
  exports: [InvitadoService],
  controllers: [InvitadoController],
  providers: [InvitadoService]
})
export class InvitadoModule {}

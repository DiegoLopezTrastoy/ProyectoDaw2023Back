import { Module } from '@nestjs/common';
import { InvitadoService } from './invitado.service';
import { InvitadoController } from './invitado.controller';

@Module({
  controllers: [InvitadoController],
  providers: [InvitadoService]
})
export class InvitadoModule {}

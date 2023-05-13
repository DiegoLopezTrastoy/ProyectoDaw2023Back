import { Module } from '@nestjs/common';
import { AvisoService } from './aviso.service';
import { AvisoController } from './aviso.controller';

@Module({
  controllers: [AvisoController],
  providers: [AvisoService]
})
export class AvisoModule {}

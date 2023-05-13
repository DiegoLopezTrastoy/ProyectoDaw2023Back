import { Module } from '@nestjs/common';
import { OpcionService } from './opcion.service';
import { OpcionController } from './opcion.controller';

@Module({
  controllers: [OpcionController],
  providers: [OpcionService]
})
export class OpcionModule {}

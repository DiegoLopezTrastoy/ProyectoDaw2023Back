import { Module } from '@nestjs/common';
import { IngresoService } from './ingreso.service';
import { IngresoController } from './ingreso.controller';

@Module({
  controllers: [IngresoController],
  providers: [IngresoService]
})
export class IngresoModule {}

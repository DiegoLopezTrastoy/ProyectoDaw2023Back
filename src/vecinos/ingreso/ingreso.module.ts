import { Module } from '@nestjs/common';
import { IngresoService } from './ingreso.service';
import { IngresoController } from './ingreso.controller';
import { Ingreso } from 'src/entities/ingreso.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ingreso])],
  exports: [IngresoService],
  controllers: [IngresoController],
  providers: [IngresoService]
})
export class IngresoModule {}

import { Module } from '@nestjs/common';
import { VecinoService } from './vecino.service';
import { VecinoController } from './vecino.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vecino } from '../../entities/vecino.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vecino])],
  controllers: [VecinoController],
  providers: [VecinoService],
  exports: [VecinoService]
})
export class VecinoModule {}

import { Module } from '@nestjs/common';
import { VecinosService } from './vecinos.service';
import { VecinosController } from './vecinos.controller';

@Module({
  controllers: [VecinosController],
  providers: [VecinosService]
})
export class VecinosModule {}

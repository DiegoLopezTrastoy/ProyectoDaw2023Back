import { Module } from '@nestjs/common';
import { VecinoService } from './vecino.service';
import { VecinoController } from './vecino.controller';

@Module({
  controllers: [VecinoController],
  providers: [VecinoService]
})
export class VecinoModule {}

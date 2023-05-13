import { Module } from '@nestjs/common';
import { GastoService } from './gasto.service';
import { GastoController } from './gasto.controller';

@Module({
  controllers: [GastoController],
  providers: [GastoService]
})
export class GastoModule {}

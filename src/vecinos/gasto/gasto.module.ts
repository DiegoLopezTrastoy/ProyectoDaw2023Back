import { Module } from '@nestjs/common';
import { GastoService } from './gasto.service';
import { GastoController } from './gasto.controller';
import { Gasto } from 'src/entities/gasto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Gasto])],
  controllers: [GastoController],
  providers: [GastoService],
  exports: [GastoService]
})
export class GastoModule {}

import { Module } from '@nestjs/common';
import { AvisoService } from './aviso.service';
import { AvisoController } from './aviso.controller';
import { Aviso } from '../../entities/aviso.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Aviso])],
  controllers: [AvisoController],
  providers: [AvisoService],
  exports: [AvisoService]
})
export class AvisoModule {}

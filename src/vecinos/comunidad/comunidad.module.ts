import { Module } from '@nestjs/common';
import { ComunidadService } from './comunidad.service';
import { ComunidadController } from './comunidad.controller';
import { Comunidad } from '../../entities/comunidad.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Comunidad])],
  controllers: [ComunidadController],
  providers: [ComunidadService],
  exports: [ComunidadService]
})
export class ComunidadModule {}

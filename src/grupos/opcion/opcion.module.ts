import { Module } from '@nestjs/common';
import { OpcionService } from './opcion.service';
import { OpcionController } from './opcion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Opcion } from 'src/entities/opcion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Opcion])],
  exports: [OpcionService],
  controllers: [OpcionController],
  providers: [OpcionService]
})
export class OpcionModule {}

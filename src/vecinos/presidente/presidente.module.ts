import { Module } from '@nestjs/common';
import { PresidenteService } from './presidente.service';
import { PresidenteController } from './presidente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Presidente } from 'src/entities/presidente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Presidente])],
  exports: [PresidenteService],
  controllers: [PresidenteController],
  providers: [PresidenteService]
})
export class PresidenteModule {}

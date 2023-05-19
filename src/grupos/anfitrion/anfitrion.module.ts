import { Module } from '@nestjs/common';
import { AnfitrionService } from './anfitrion.service';
import { AnfitrionController } from './anfitrion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Anfitrion } from 'src/entities/anfitrion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Anfitrion])],
  exports: [AnfitrionService],
  controllers: [AnfitrionController],
  providers: [AnfitrionService]
})
export class AnfitrionModule {}

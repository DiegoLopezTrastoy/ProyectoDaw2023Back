import { Module } from '@nestjs/common';
import { ReunionService } from './reunion.service';
import { ReunionController } from './reunion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reunion } from 'src/entities/reunion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reunion])],
  exports: [ReunionService],
  controllers: [ReunionController],
  providers: [ReunionService]
})
export class ReunionModule {}

import { Module } from '@nestjs/common';
import { VotacionService } from './votacion.service';
import { VotacionController } from './votacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VotacionVecinos } from 'src/entities/votacionVecinos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VotacionVecinos])],
  exports: [VotacionService],
  controllers: [VotacionController],
  providers: [VotacionService]
})
export class VotacionModule {}

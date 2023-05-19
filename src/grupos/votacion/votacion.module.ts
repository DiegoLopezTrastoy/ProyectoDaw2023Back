import { Module } from '@nestjs/common';
import { VotacionService } from './votacion.service';
import { VotacionController } from './votacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VotacionGrupos } from 'src/entities/votacionGrupos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VotacionGrupos])],
  exports: [VotacionService],
  controllers: [VotacionController],
  providers: [VotacionService]
})
export class VotacionModule {}

import { Module } from '@nestjs/common';
import { VotacionService } from './votacion.service';
import { VotacionController } from './votacion.controller';

@Module({
  controllers: [VotacionController],
  providers: [VotacionService]
})
export class VotacionModule {}

import { Module } from '@nestjs/common';
import { PresidenteService } from './presidente.service';
import { PresidenteController } from './presidente.controller';

@Module({
  controllers: [PresidenteController],
  providers: [PresidenteService]
})
export class PresidenteModule {}

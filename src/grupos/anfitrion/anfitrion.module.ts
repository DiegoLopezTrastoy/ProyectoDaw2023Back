import { Module } from '@nestjs/common';
import { AnfitrionService } from './anfitrion.service';
import { AnfitrionController } from './anfitrion.controller';

@Module({
  controllers: [AnfitrionController],
  providers: [AnfitrionService]
})
export class AnfitrionModule {}

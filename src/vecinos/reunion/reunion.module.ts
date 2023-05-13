import { Module } from '@nestjs/common';
import { ReunionService } from './reunion.service';
import { ReunionController } from './reunion.controller';

@Module({
  controllers: [ReunionController],
  providers: [ReunionService]
})
export class ReunionModule {}

import { Module } from '@nestjs/common';
import { TemaService } from './tema.service';
import { TemaController } from './tema.controller';

@Module({
  controllers: [TemaController],
  providers: [TemaService]
})
export class TemaModule {}

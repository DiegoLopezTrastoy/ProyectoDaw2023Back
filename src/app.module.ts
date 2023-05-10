import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VecinosService } from './vecinos/vecinos.service';
import { GruposService } from './grupos/grupos.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, VecinosService, GruposService],
})
export class AppModule {}

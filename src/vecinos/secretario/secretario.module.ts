import { Module } from '@nestjs/common';
import { SecretarioService } from './secretario.service';
import { SecretarioController } from './secretario.controller';

@Module({
  controllers: [SecretarioController],
  providers: [SecretarioService]
})
export class SecretarioModule {}

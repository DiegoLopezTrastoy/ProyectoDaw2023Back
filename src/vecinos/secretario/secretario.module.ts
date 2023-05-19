import { Module } from '@nestjs/common';
import { SecretarioService } from './secretario.service';
import { SecretarioController } from './secretario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Secretario } from 'src/entities/secretario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Secretario])],
  exports: [SecretarioService],
  controllers: [SecretarioController],
  providers: [SecretarioService]
})
export class SecretarioModule {}

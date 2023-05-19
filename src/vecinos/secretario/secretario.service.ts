import { Injectable } from '@nestjs/common';
import { CreateSecretarioDto } from './dto/create-secretario.dto';
import { UpdateSecretarioDto } from './dto/update-secretario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Secretario } from 'src/entities/secretario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SecretarioService {
  constructor(
    @InjectRepository(Secretario)
    private readonly secretarioRepository: Repository<Secretario>,
  ) {}

  create(createSecretarioDto: CreateSecretarioDto) {
    return this.secretarioRepository.create(createSecretarioDto);
  }

  findAll() {
    return this.secretarioRepository.findBy({ activo: true });
  }

  findOne(id: string) {
    return this.secretarioRepository.findOneBy({ id, activo: true });
  }

  update(id: string, updateSecretarioDto: UpdateSecretarioDto) {
    return this.secretarioRepository.update(
      { id, activo: true },
      updateSecretarioDto,
    );
  }

  remove(id: string) {
    return this.secretarioRepository.update(
      { id, activo: true },
      { activo: false },
    );
  }
}

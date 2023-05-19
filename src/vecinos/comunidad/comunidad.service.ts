import { Injectable } from '@nestjs/common';
import { CreateComunidadDto } from './dto/create-comunidad.dto';
import { UpdateComunidadDto } from './dto/update-comunidad.dto';
import { Comunidad } from '../../entities/comunidad.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ComunidadService {
  constructor(
    @InjectRepository(Comunidad)
    private readonly comunidadRepository: Repository<Comunidad>,
  ) {}

  create(createComunidadDto: CreateComunidadDto) {
    return this.comunidadRepository.save(createComunidadDto);
  }

  findAll() {
    return this.comunidadRepository.find({ where: { activo: true } });
  }

  findOne(id: string) {
    return this.comunidadRepository.findOne({ where: { id, activo: true } });
  }

  update(id: string, updateComunidadDto: UpdateComunidadDto) {
    return this.comunidadRepository.update(
      { id, activo: true },
      updateComunidadDto,
    );
  }

  remove(id: string) {
    return this.comunidadRepository.update(
      { id, activo: true },
      { activo: false },
    );
  }
}

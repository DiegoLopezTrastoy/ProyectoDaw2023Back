import { Injectable } from '@nestjs/common';
import { CreateOpcionDto } from './dto/create-opcion.dto';
import { UpdateOpcionDto } from './dto/update-opcion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Opcion } from 'src/entities/opcion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OpcionService {
  constructor(
    @InjectRepository(Opcion) private readonly opcionRepository: Repository<Opcion>,
  ) {}

  create(createOpcionDto: CreateOpcionDto) {
    return this.opcionRepository.save(createOpcionDto);
  }

  findAll() {
    return this.opcionRepository.findBy({activo: true});
  }

  findOne(id: string) {
    return this.opcionRepository.findOneBy({id, activo: true});
  }

  update(id: string, updateOpcionDto: UpdateOpcionDto) {
    return this.opcionRepository.update({id, activo: true}, updateOpcionDto);
  }

  remove(id: string) {
    return this.opcionRepository.update({id, activo: true}, {activo:  false});
  }
}

import { Injectable } from '@nestjs/common';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Grupo } from 'src/entities/grupo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GrupoService {
  constructor(
    @InjectRepository(Grupo) private readonly grupoRepository: Repository<Grupo>,
  ) {}

  create(createGrupoDto: CreateGrupoDto) {
    return this.grupoRepository.save(createGrupoDto);
  }

  findAll() {
    return this.grupoRepository.findBy({activo: true});
  }

  findOne(id: string) {
    return this.grupoRepository.findOneBy({id, activo: true});
  }

  update(id: string, updateGrupoDto: UpdateGrupoDto) {
    return this.grupoRepository.update({id, activo: true}, updateGrupoDto);
  }

  remove(id: string) {
    return this.grupoRepository.update({id, activo: true}, {activo: false});
  }
}

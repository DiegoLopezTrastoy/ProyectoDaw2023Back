import { Injectable } from '@nestjs/common';
import { CreateVotacionGrupoDto } from './dto/create-votacion.dto';
import { UpdateVotacionDto } from './dto/update-votacion.dto';
import { VotacionGrupos } from 'src/entities/votacionGrupos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VotacionService {
  constructor(
    @InjectRepository(VotacionGrupos) private readonly votacionRepository: Repository<VotacionGrupos>,
  ) {}

  create(createVotacionDto: CreateVotacionGrupoDto) {
    return this.votacionRepository.save(createVotacionDto);
  }

  findAll() {
    return this.votacionRepository.findBy({activo: true});
  }

  findOne(id: string) {
    return this.votacionRepository.findOneBy({id, activo: true});
  }

  update(id: string, updateVotacionDto: UpdateVotacionDto) {
    return this.votacionRepository.update({id, activo: true}, updateVotacionDto);
  }

  remove(id: string) {
    return this.votacionRepository.update({id, activo: true}, {activo: false});
  }
}

import { Injectable } from '@nestjs/common';
import { CreateVotacionVecinosDto } from './dto/create-votacion.dto';
import { UpdateVotacionDto } from './dto/update-votacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VotacionVecinos } from 'src/entities/votacionVecinos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VotacionService {
  constructor(
    @InjectRepository(VotacionVecinos)
    private readonly votacionRepository: Repository<VotacionVecinos>,
  ) {}

  create(createVotacionDto: CreateVotacionVecinosDto) {
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

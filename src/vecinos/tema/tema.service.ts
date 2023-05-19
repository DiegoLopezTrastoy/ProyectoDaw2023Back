import { Injectable } from '@nestjs/common';
import { CreateTemaDto } from './dto/create-tema.dto';
import { UpdateTemaDto } from './dto/update-tema.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tema } from 'src/entities/tema.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TemaService {
  constructor(
    @InjectRepository(Tema)
    private readonly temaRepository: Repository<Tema>,
  ) {}

  create(createTemaDto: CreateTemaDto) {
    return this.temaRepository.save(createTemaDto);
  }

  findAll() {
    return this.temaRepository.findBy({activo: true});
  }

  findOne(id: string) {
    return this.temaRepository.findOneBy({id});
  }

  update(id: string, updateTemaDto: UpdateTemaDto) {
    return this.temaRepository.update({id, activo:true}, updateTemaDto);
  }

  remove(id: string) {
    return this.temaRepository.update({id, activo: true}, {activo: true});
  }
}

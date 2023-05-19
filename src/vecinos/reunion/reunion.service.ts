import { Injectable } from '@nestjs/common';
import { CreateReunionDto } from './dto/create-reunion.dto';
import { UpdateReunionDto } from './dto/update-reunion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reunion } from 'src/entities/reunion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReunionService {
  constructor(
    @InjectRepository(Reunion)
    private readonly presidenteRepository: Repository<Reunion>,
  ) {}
  
  create(createReunionDto: CreateReunionDto) {
    return this.presidenteRepository.save(createReunionDto);
  }

  findAll() {
    return this.presidenteRepository.findBy({activo: true});
  }

  findOne(id: string) {
    return this.presidenteRepository.findOneBy({id, activo: true});
  }

  update(id: string, updateReunionDto: UpdateReunionDto) {
    return this.presidenteRepository.update({id, activo: true}, updateReunionDto);
  }

  remove(id: string) {
    return this.presidenteRepository.update({id, activo: true}, {activo: false});
  }
}

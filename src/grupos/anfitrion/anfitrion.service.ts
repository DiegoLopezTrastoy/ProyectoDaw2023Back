import { Injectable } from '@nestjs/common';
import { CreateAnfitrionDto } from './dto/create-anfitrion.dto';
import { UpdateAnfitrionDto } from './dto/update-anfitrion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Anfitrion } from 'src/entities/anfitrion.entity';

@Injectable()
export class AnfitrionService {
  constructor(
    @InjectRepository(Anfitrion) private readonly anfitrionRepository: Repository<Anfitrion>,
  ) {}

  create(createAnfitrionDto: CreateAnfitrionDto) {
    return this.anfitrionRepository.save(createAnfitrionDto);
  }

  findAll() {
    return this.anfitrionRepository.findBy({activo: true});
  }

  findOne(id: string) {
    return this.anfitrionRepository.findOneBy({id, activo: true});
  }

  update(id: string, updateAnfitrionDto: UpdateAnfitrionDto) {
    return this.anfitrionRepository.update({id, activo: true}, updateAnfitrionDto);
  }

  remove(id: string) {
    return this.anfitrionRepository.update({id, activo: true}, {activo: false});
  }
}

import { Injectable } from '@nestjs/common';
import { CreatePresidenteDto } from './dto/create-presidente.dto';
import { UpdatePresidenteDto } from './dto/update-presidente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Presidente } from 'src/entities/presidente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PresidenteService {
  constructor(
    @InjectRepository(Presidente)
    private readonly presidenteRepository: Repository<Presidente>,
  ) {}

  create(createPresidenteDto: CreatePresidenteDto) {
    return this.presidenteRepository.save(createPresidenteDto);
  }

  findAll() {
    return this.presidenteRepository.findBy({ activo: true });
  }

  findOne(id: string) {
    return this.presidenteRepository.findOneBy({ id, activo: true });
  }

  update(id: string, updatePresidenteDto: UpdatePresidenteDto) {
    return this.presidenteRepository.update(
      { id, activo: true },
      updatePresidenteDto,
    );
  }

  remove(id: string) {
    return this.presidenteRepository.update(
      { id, activo: true },
      { activo: false },
    );
  }
}

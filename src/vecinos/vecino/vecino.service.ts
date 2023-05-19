import { Injectable } from '@nestjs/common';
import { CreateVecinoDto } from './dto/create-vecino.dto';
import { UpdateVecinoDto } from './dto/update-vecino.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vecino } from '../../entities/vecino.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VecinoService {
  constructor(
    @InjectRepository(Vecino)
    private readonly vecinoRepository: Repository<Vecino>,
  ) {}

  create(createVecinoDto: CreateVecinoDto) {
    return this.vecinoRepository.save(createVecinoDto);
  }

  findAll() {
    return this.vecinoRepository.findBy({ activo: true });
  }

  findOne(id: string) {
    return this.vecinoRepository.findOneBy({ id, activo: true });
  }

  update(id: string, updateVecinoDto: UpdateVecinoDto) {
    return this.vecinoRepository.update({ id, activo: true }, updateVecinoDto);
  }

  remove(id: string) {
    return this.vecinoRepository.update(
      { id, activo: true },
      { activo: false },
    );
  }
}

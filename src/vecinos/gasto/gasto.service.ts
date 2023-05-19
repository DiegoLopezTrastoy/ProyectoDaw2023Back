import { Injectable } from '@nestjs/common';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Gasto } from 'src/entities/gasto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GastoService {
  constructor(
    @InjectRepository(Gasto)
    private readonly gastoRepository: Repository<Gasto>,
  ) {}

  create(createGastoDto: CreateGastoDto) {
    return this.gastoRepository.save(createGastoDto);
  }

  findAll() {
    return this.gastoRepository.find({ where: { activo: true } });
  }

  findOne(id: string) {
    return this.gastoRepository.findOneBy({ id, activo: true });
  }

  update(id: string, updateGastoDto: UpdateGastoDto) {
    return this.gastoRepository.update({ id, activo: true }, updateGastoDto);
  }

  remove(id: string) {
    return this.gastoRepository.update({ id, activo: true }, { activo: false });
  }
}

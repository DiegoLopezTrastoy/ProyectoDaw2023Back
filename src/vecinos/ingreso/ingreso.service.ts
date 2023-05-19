import { Injectable } from '@nestjs/common';
import { CreateIngresoDto } from './dto/create-ingreso.dto';
import { UpdateIngresoDto } from './dto/update-ingreso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingreso } from 'src/entities/ingreso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IngresoService {
  constructor(
    @InjectRepository(Ingreso)
    private readonly gastoRepository: Repository<Ingreso>,
  ) {}
  create(createIngresoDto: CreateIngresoDto) {
    return this.gastoRepository.save(createIngresoDto);
  }

  findAll() {
    return this.gastoRepository.find({ where: { activo: true } });
  }

  findOne(id: string) {
    return this.gastoRepository.findOneBy({ id, activo: true });
  }

  update(id: string, updateIngresoDto: UpdateIngresoDto) {
    return this.gastoRepository.update({ id, activo: true }, updateIngresoDto);
  }

  remove(id: string) {
    return this.gastoRepository.update({ id, activo: true }, { activo: false });
  }
}

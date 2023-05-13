import { Injectable } from '@nestjs/common';
import { CreateComunidadDto } from './dto/create-comunidad.dto';
import { UpdateComunidadDto } from './dto/update-comunidad.dto';

@Injectable()
export class ComunidadService {
  create(createComunidadDto: CreateComunidadDto) {
    return 'This action adds a new comunidad';
  }

  findAll() {
    return `This action returns all comunidad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comunidad`;
  }

  update(id: number, updateComunidadDto: UpdateComunidadDto) {
    return `This action updates a #${id} comunidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} comunidad`;
  }
}

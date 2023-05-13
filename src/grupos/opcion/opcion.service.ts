import { Injectable } from '@nestjs/common';
import { CreateOpcionDto } from './dto/create-opcion.dto';
import { UpdateOpcionDto } from './dto/update-opcion.dto';

@Injectable()
export class OpcionService {
  create(createOpcionDto: CreateOpcionDto) {
    return 'This action adds a new opcion';
  }

  findAll() {
    return `This action returns all opcion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} opcion`;
  }

  update(id: number, updateOpcionDto: UpdateOpcionDto) {
    return `This action updates a #${id} opcion`;
  }

  remove(id: number) {
    return `This action removes a #${id} opcion`;
  }
}

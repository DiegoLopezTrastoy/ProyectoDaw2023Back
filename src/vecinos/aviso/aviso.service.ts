import { Injectable } from '@nestjs/common';
import { CreateAvisoDto } from './dto/create-aviso.dto';
import { UpdateAvisoDto } from './dto/update-aviso.dto';

@Injectable()
export class AvisoService {
  create(createAvisoDto: CreateAvisoDto) {
    return 'This action adds a new aviso';
  }

  findAll() {
    return `This action returns all aviso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aviso`;
  }

  update(id: number, updateAvisoDto: UpdateAvisoDto) {
    return `This action updates a #${id} aviso`;
  }

  remove(id: number) {
    return `This action removes a #${id} aviso`;
  }
}

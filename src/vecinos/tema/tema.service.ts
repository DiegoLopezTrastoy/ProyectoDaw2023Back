import { Injectable } from '@nestjs/common';
import { CreateTemaDto } from './dto/create-tema.dto';
import { UpdateTemaDto } from './dto/update-tema.dto';

@Injectable()
export class TemaService {
  create(createTemaDto: CreateTemaDto) {
    return 'This action adds a new tema';
  }

  findAll() {
    return `This action returns all tema`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tema`;
  }

  update(id: number, updateTemaDto: UpdateTemaDto) {
    return `This action updates a #${id} tema`;
  }

  remove(id: number) {
    return `This action removes a #${id} tema`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreatePresidenteDto } from './dto/create-presidente.dto';
import { UpdatePresidenteDto } from './dto/update-presidente.dto';

@Injectable()
export class PresidenteService {
  create(createPresidenteDto: CreatePresidenteDto) {
    return 'This action adds a new presidente';
  }

  findAll() {
    return `This action returns all presidente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} presidente`;
  }

  update(id: number, updatePresidenteDto: UpdatePresidenteDto) {
    return `This action updates a #${id} presidente`;
  }

  remove(id: number) {
    return `This action removes a #${id} presidente`;
  }
}

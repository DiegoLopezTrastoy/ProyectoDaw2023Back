import { Injectable } from '@nestjs/common';
import { CreateVecinoDto } from './dto/create-vecino.dto';
import { UpdateVecinoDto } from './dto/update-vecino.dto';

@Injectable()
export class VecinosService {
  create(createVecinoDto: CreateVecinoDto) {
    return 'This action adds a new vecino';
  }

  findAll() {
    return `This action returns all vecinos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vecino`;
  }

  update(id: number, updateVecinoDto: UpdateVecinoDto) {
    return `This action updates a #${id} vecino`;
  }

  remove(id: number) {
    return `This action removes a #${id} vecino`;
  }
}

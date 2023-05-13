import { Injectable } from '@nestjs/common';
import { CreateAnfitrionDto } from './dto/create-anfitrion.dto';
import { UpdateAnfitrionDto } from './dto/update-anfitrion.dto';

@Injectable()
export class AnfitrionService {
  create(createAnfitrionDto: CreateAnfitrionDto) {
    return 'This action adds a new anfitrion';
  }

  findAll() {
    return `This action returns all anfitrion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} anfitrion`;
  }

  update(id: number, updateAnfitrionDto: UpdateAnfitrionDto) {
    return `This action updates a #${id} anfitrion`;
  }

  remove(id: number) {
    return `This action removes a #${id} anfitrion`;
  }
}

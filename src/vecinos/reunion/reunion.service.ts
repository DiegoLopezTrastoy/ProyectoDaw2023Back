import { Injectable } from '@nestjs/common';
import { CreateReunionDto } from './dto/create-reunion.dto';
import { UpdateReunionDto } from './dto/update-reunion.dto';

@Injectable()
export class ReunionService {
  create(createReunionDto: CreateReunionDto) {
    return 'This action adds a new reunion';
  }

  findAll() {
    return `This action returns all reunion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reunion`;
  }

  update(id: number, updateReunionDto: UpdateReunionDto) {
    return `This action updates a #${id} reunion`;
  }

  remove(id: number) {
    return `This action removes a #${id} reunion`;
  }
}

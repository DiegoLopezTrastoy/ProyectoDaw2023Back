import { Injectable } from '@nestjs/common';
import { CreateVotacionDto } from './dto/create-votacion.dto';
import { UpdateVotacionDto } from './dto/update-votacion.dto';

@Injectable()
export class VotacionService {
  create(createVotacionDto: CreateVotacionDto) {
    return 'This action adds a new votacion';
  }

  findAll() {
    return `This action returns all votacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} votacion`;
  }

  update(id: number, updateVotacionDto: UpdateVotacionDto) {
    return `This action updates a #${id} votacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} votacion`;
  }
}

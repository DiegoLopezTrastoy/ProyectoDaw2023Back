import { Injectable } from '@nestjs/common';
import { CreateSecretarioDto } from './dto/create-secretario.dto';
import { UpdateSecretarioDto } from './dto/update-secretario.dto';

@Injectable()
export class SecretarioService {
  create(createSecretarioDto: CreateSecretarioDto) {
    return 'This action adds a new secretario';
  }

  findAll() {
    return `This action returns all secretario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} secretario`;
  }

  update(id: number, updateSecretarioDto: UpdateSecretarioDto) {
    return `This action updates a #${id} secretario`;
  }

  remove(id: number) {
    return `This action removes a #${id} secretario`;
  }
}

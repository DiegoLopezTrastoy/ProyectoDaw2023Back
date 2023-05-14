import { Injectable } from '@nestjs/common';
import { CreateAvisoDto } from './dto/create-aviso.dto';
import { UpdateAvisoDto } from './dto/update-aviso.dto';
import { Aviso } from './entities/aviso.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AvisoService {

  constructor(
      @InjectRepository(Aviso) private readonly avisoRepository: Repository<Aviso>
  ){}

  create(createAvisoDto: CreateAvisoDto) {
    return this.avisoRepository.save(createAvisoDto);
  }

  findAll() {
    return this.avisoRepository.find({where: {activo: true}});
  }

  findOne(id: string) {
    return this.avisoRepository.findOneBy({id, activo: true});
  }

  async update(id: string, updateAvisoDto: UpdateAvisoDto) {
    const aviso = await this.avisoRepository.findOneBy({id, activo: true});
    if (aviso) {
      Object.assign(aviso, updateAvisoDto);
      this.avisoRepository.save(aviso);
    }
  }

  remove(id: string) {
    return `This action removes a #${id} aviso`;
  }
}

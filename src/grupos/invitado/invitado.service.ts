import { Injectable } from '@nestjs/common';
import { CreateInvitadoDto } from './dto/create-invitado.dto';
import { UpdateInvitadoDto } from './dto/update-invitado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Invitado } from 'src/entities/invitado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InvitadoService {
  constructor(
    @InjectRepository(Invitado) private readonly invitadoRepository: Repository<Invitado>,
  ) {}

  create(createInvitadoDto: CreateInvitadoDto) {
    return this.invitadoRepository.save(createInvitadoDto);
  }

  findAll() {
    return this.invitadoRepository.findBy({activo: true});
  }

  findOne(id: string) {
    return this.invitadoRepository.findOneBy({id, activo: true});
  }

  update(id: string, updateInvitadoDto: UpdateInvitadoDto) {
    return this.invitadoRepository.update({id, activo: true}, updateInvitadoDto);
  }

  remove(id: string) {
    return this.invitadoRepository.update({id, activo: true}, {activo: false});
  }
}

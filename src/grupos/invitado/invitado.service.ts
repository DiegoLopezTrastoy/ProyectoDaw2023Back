import { Injectable } from '@nestjs/common';
import { CreateInvitadoDto } from './dto/create-invitado.dto';
import { UpdateInvitadoDto } from './dto/update-invitado.dto';

@Injectable()
export class InvitadoService {
  create(createInvitadoDto: CreateInvitadoDto) {
    return 'This action adds a new invitado';
  }

  findAll() {
    return `This action returns all invitado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invitado`;
  }

  update(id: number, updateInvitadoDto: UpdateInvitadoDto) {
    return `This action updates a #${id} invitado`;
  }

  remove(id: number) {
    return `This action removes a #${id} invitado`;
  }
}

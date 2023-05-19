import { Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Evento } from 'src/entities/evento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventoService {
  constructor(
    @InjectRepository(Evento) private readonly eventoRepository: Repository<Evento>,
  ) {}

  create(createEventoDto: CreateEventoDto) {
    return this.eventoRepository.save(createEventoDto);
  }

  findAll() {
    return this.eventoRepository.findBy({activo: true});
  }

  findOne(id: string) {
    return this.eventoRepository.findOneBy({id, activo: true});
  }

  update(id: string, updateEventoDto: UpdateEventoDto) {
    return this.eventoRepository.update({id, activo: true}, updateEventoDto);
  }

  remove(id: string) {
    return this.eventoRepository.update({id, activo: true}, {activo: false});
  }
}

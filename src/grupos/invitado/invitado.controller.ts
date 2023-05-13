import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvitadoService } from './invitado.service';
import { CreateInvitadoDto } from './dto/create-invitado.dto';
import { UpdateInvitadoDto } from './dto/update-invitado.dto';

@Controller('invitado')
export class InvitadoController {
  constructor(private readonly invitadoService: InvitadoService) {}

  @Post()
  create(@Body() createInvitadoDto: CreateInvitadoDto) {
    return this.invitadoService.create(createInvitadoDto);
  }

  @Get()
  findAll() {
    return this.invitadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invitadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvitadoDto: UpdateInvitadoDto) {
    return this.invitadoService.update(+id, updateInvitadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invitadoService.remove(+id);
  }
}

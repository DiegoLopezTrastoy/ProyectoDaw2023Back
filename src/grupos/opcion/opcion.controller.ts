import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OpcionService } from './opcion.service';
import { CreateOpcionDto } from './dto/create-opcion.dto';
import { UpdateOpcionDto } from './dto/update-opcion.dto';

@Controller('opcion')
export class OpcionController {
  constructor(private readonly opcionService: OpcionService) {}

  @Post()
  create(@Body() createOpcionDto: CreateOpcionDto) {
    return this.opcionService.create(createOpcionDto);
  }

  @Get()
  findAll() {
    return this.opcionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.opcionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpcionDto: UpdateOpcionDto) {
    return this.opcionService.update(id, updateOpcionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.opcionService.remove(id);
  }
}

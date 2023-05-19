import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PresidenteService } from './presidente.service';
import { CreatePresidenteDto } from './dto/create-presidente.dto';
import { UpdatePresidenteDto } from './dto/update-presidente.dto';

@Controller('presidente')
export class PresidenteController {
  constructor(private readonly presidenteService: PresidenteService) {}

  @Post()
  create(@Body() createPresidenteDto: CreatePresidenteDto) {
    return this.presidenteService.create(createPresidenteDto);
  }

  @Get()
  findAll() {
    return this.presidenteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.presidenteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePresidenteDto: UpdatePresidenteDto) {
    return this.presidenteService.update(id, updatePresidenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.presidenteService.remove(id);
  }
}

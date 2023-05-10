import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VecinosService } from './vecinos.service';
import { CreateVecinoDto } from './dto/create-vecino.dto';
import { UpdateVecinoDto } from './dto/update-vecino.dto';

@Controller('vecinos')
export class VecinosController {
  constructor(private readonly vecinosService: VecinosService) {}

  @Post()
  create(@Body() createVecinoDto: CreateVecinoDto) {
    return this.vecinosService.create(createVecinoDto);
  }

  @Get()
  findAll() {
    return this.vecinosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vecinosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVecinoDto: UpdateVecinoDto) {
    return this.vecinosService.update(+id, updateVecinoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vecinosService.remove(+id);
  }
}

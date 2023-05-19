import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VecinoService } from './vecino.service';
import { CreateVecinoDto } from './dto/create-vecino.dto';
import { UpdateVecinoDto } from './dto/update-vecino.dto';

@Controller('vecino')
export class VecinoController {
  constructor(private readonly vecinoService: VecinoService) {}

  @Post()
  create(@Body() createVecinoDto: CreateVecinoDto) {
    return this.vecinoService.create(createVecinoDto);
  }

  @Get()
  findAll() {
    return this.vecinoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vecinoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVecinoDto: UpdateVecinoDto) {
    return this.vecinoService.update(id, updateVecinoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vecinoService.remove(id);
  }
}

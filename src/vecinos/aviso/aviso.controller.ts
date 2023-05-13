import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvisoService } from './aviso.service';
import { CreateAvisoDto } from './dto/create-aviso.dto';
import { UpdateAvisoDto } from './dto/update-aviso.dto';

@Controller('aviso')
export class AvisoController {
  constructor(private readonly avisoService: AvisoService) {}

  @Post()
  create(@Body() createAvisoDto: CreateAvisoDto) {
    return this.avisoService.create(createAvisoDto);
  }

  @Get()
  findAll() {
    return this.avisoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avisoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvisoDto: UpdateAvisoDto) {
    return this.avisoService.update(+id, updateAvisoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avisoService.remove(+id);
  }
}

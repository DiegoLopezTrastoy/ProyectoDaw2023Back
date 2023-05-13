import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnfitrionService } from './anfitrion.service';
import { CreateAnfitrionDto } from './dto/create-anfitrion.dto';
import { UpdateAnfitrionDto } from './dto/update-anfitrion.dto';

@Controller('anfitrion')
export class AnfitrionController {
  constructor(private readonly anfitrionService: AnfitrionService) {}

  @Post()
  create(@Body() createAnfitrionDto: CreateAnfitrionDto) {
    return this.anfitrionService.create(createAnfitrionDto);
  }

  @Get()
  findAll() {
    return this.anfitrionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anfitrionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnfitrionDto: UpdateAnfitrionDto) {
    return this.anfitrionService.update(+id, updateAnfitrionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anfitrionService.remove(+id);
  }
}

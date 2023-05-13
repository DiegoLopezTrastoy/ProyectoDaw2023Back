import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReunionService } from './reunion.service';
import { CreateReunionDto } from './dto/create-reunion.dto';
import { UpdateReunionDto } from './dto/update-reunion.dto';

@Controller('reunion')
export class ReunionController {
  constructor(private readonly reunionService: ReunionService) {}

  @Post()
  create(@Body() createReunionDto: CreateReunionDto) {
    return this.reunionService.create(createReunionDto);
  }

  @Get()
  findAll() {
    return this.reunionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reunionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReunionDto: UpdateReunionDto) {
    return this.reunionService.update(+id, updateReunionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reunionService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VotacionService } from './votacion.service';
import { CreateVotacionVecinosDto } from './dto/create-votacion.dto';
import { UpdateVotacionDto } from './dto/update-votacion.dto';

@Controller('votacion')
export class VotacionController {
  constructor(private readonly votacionService: VotacionService) {}

  @Post()
  create(@Body() createVotacionDto: CreateVotacionVecinosDto) {
    return this.votacionService.create(createVotacionDto);
  }

  @Get()
  findAll() {
    return this.votacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.votacionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVotacionDto: UpdateVotacionDto) {
    return this.votacionService.update(id, updateVotacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.votacionService.remove(id);
  }
}

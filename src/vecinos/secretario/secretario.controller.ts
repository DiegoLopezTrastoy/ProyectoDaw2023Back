import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SecretarioService } from './secretario.service';
import { CreateSecretarioDto } from './dto/create-secretario.dto';
import { UpdateSecretarioDto } from './dto/update-secretario.dto';

@Controller('secretario')
export class SecretarioController {
  constructor(private readonly secretarioService: SecretarioService) {}

  @Post()
  create(@Body() createSecretarioDto: CreateSecretarioDto) {
    return this.secretarioService.create(createSecretarioDto);
  }

  @Get()
  findAll() {
    return this.secretarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.secretarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSecretarioDto: UpdateSecretarioDto) {
    return this.secretarioService.update(+id, updateSecretarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.secretarioService.remove(+id);
  }
}

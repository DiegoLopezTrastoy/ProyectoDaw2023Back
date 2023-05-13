import { PartialType } from '@nestjs/mapped-types';
import { CreateAnfitrionDto } from './create-anfitrion.dto';

export class UpdateAnfitrionDto extends PartialType(CreateAnfitrionDto) {}

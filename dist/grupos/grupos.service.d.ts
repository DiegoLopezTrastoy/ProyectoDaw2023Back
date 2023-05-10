import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
export declare class GruposService {
    create(createGrupoDto: CreateGrupoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGrupoDto: UpdateGrupoDto): string;
    remove(id: number): string;
}

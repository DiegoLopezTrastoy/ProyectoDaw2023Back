import { GruposService } from './grupos.service';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
export declare class GruposController {
    private readonly gruposService;
    constructor(gruposService: GruposService);
    create(createGrupoDto: CreateGrupoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGrupoDto: UpdateGrupoDto): string;
    remove(id: string): string;
}

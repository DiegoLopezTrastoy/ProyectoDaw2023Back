import { VecinosService } from './vecinos.service';
import { CreateVecinoDto } from './dto/create-vecino.dto';
import { UpdateVecinoDto } from './dto/update-vecino.dto';
export declare class VecinosController {
    private readonly vecinosService;
    constructor(vecinosService: VecinosService);
    create(createVecinoDto: CreateVecinoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateVecinoDto: UpdateVecinoDto): string;
    remove(id: string): string;
}

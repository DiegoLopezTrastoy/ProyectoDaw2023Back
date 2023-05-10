import { CreateVecinoDto } from './dto/create-vecino.dto';
import { UpdateVecinoDto } from './dto/update-vecino.dto';
export declare class VecinosService {
    create(createVecinoDto: CreateVecinoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateVecinoDto: UpdateVecinoDto): string;
    remove(id: number): string;
}

import { Vecino } from "src/entities/vecino.entity";

export class CreateAvisoDto {
    imagen: string;
    texto: string;
    vecino: Vecino;
}

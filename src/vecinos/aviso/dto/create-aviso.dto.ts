import { Vecino } from "src/vecinos/vecino/entities/vecino.entity";

export class CreateAvisoDto {
    imagen: string;
    texto: string;
    vecino: Vecino;
}

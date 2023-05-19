import { Tema } from "src/entities/tema.entity";
import { Vecino } from "src/entities/vecino.entity";

export class CreateVotacionVecinosDto {
    conformidad: boolean;
    vecinos: Vecino[];
    tema: Tema;
}

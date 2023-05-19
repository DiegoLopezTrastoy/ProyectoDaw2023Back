import { Vecino } from "src/entities/vecino.entity";

export class CreateComunidadDto {
    direccion: string;
    saldo: Number;
    activo: boolean;
    vecinos: Vecino[];
}

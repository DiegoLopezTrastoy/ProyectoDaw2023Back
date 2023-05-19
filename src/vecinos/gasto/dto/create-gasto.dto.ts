import { Comunidad } from "src/entities/comunidad.entity";

export class CreateGastoDto {
    descripcion: string;
    cantidad: number;
    fecha: string;
    comunidad: Comunidad;
}

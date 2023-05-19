import { Comunidad } from "src/entities/comunidad.entity";

export class CreateIngresoDto {
    descripcion: string;
    cantidad: number;
    fecha: string;
    comunidad: Comunidad;
}

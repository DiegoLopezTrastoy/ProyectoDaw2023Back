import { Comunidad } from "src/vecinos/comunidad/entities/comunidad.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Gasto {

    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    descripcion: string;

    @Column()
    cantidad: number;

    @Column()
    fecha: string;

    @ManyToOne(() => Comunidad)
    comunidad: Comunidad;
}

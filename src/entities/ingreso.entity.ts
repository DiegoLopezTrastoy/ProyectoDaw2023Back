import { Comunidad } from "src/entities/comunidad.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ingreso {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    descripcion: string;

    @Column()
    cantidad: number;

    @Column()
    fecha: string;

    @Column({default: true, type: "boolean", select: false})
    activo: boolean;

    @ManyToOne(() => Comunidad)
    comunidad: Comunidad;
}

import { Vecino } from "src/vecinos/vecino/entities/vecino.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Aviso {

    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column({default: "no_image.jpg"})
    imagen: string;

    @Column()
    texto: string;

    @Column({default: true, type: "boolean", select: false})
    activo: boolean;

    @ManyToOne(() => Vecino)
    vecino: Vecino;
}

import { Reunion } from "src/entities/reunion.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tema {
    
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    texto: string;

    @Column()
    fechaInicioVotos: string;

    @Column()
    fechaFinVotos: string;

    @Column({default: true, type: "boolean", select: false})
    activo: boolean;

    @ManyToOne(() => Reunion)
    reunion: Reunion;
}

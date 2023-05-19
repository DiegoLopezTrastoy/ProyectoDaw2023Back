import { Tema } from "src/entities/tema.entity";
import { Vecino } from "src/entities/vecino.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VotacionVecinos {
    
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column({type: "boolean"})
    conformidad: boolean;

    @Column({default: true, type: "boolean", select: false})
    activo: boolean;

    @ManyToMany(() => Vecino)
    vecinos: Vecino[];

    @ManyToOne(() => Tema)
    tema: Tema;
}

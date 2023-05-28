import { Tema } from "src/entities/tema.entity";
import { Vecino } from "src/entities/vecino.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VotacionVecinos {
    
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column({type: "boolean"})
    conformidad: boolean;

    @Column({default: true, type: "boolean", select: false})
    activo: boolean;

    @ManyToMany(() => Vecino)
    @JoinTable()
    vecinos: Vecino[];

    @ManyToOne(() => Tema)
    tema: Tema;
}

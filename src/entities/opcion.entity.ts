import { Invitado } from "src/entities/invitado.entity";
import { User } from "src/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Opcion {

    @PrimaryGeneratedColumn("uuid")
    id?: string;
    
    @Column()
    texto: string;

    @Column({default: true, type: "boolean", select: false})
    activo: boolean;

    @ManyToMany(() => Invitado)
    @JoinTable()
    invitados: Invitado;
}

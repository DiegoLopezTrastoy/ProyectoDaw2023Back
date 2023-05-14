import { Invitado } from "src/grupos/invitado/entities/invitado.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Opcion {

    @PrimaryGeneratedColumn("uuid")
    id?: string;
    
    @Column()
    texto: string;

    @ManyToMany(() => Invitado)
    invitados: Invitado;
}

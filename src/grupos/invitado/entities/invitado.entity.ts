import { Opcion } from "src/grupos/opcion/entities/opcion.entity";
import { User } from "src/user/entities/user.entity";
import { Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Invitado {

    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @OneToOne(() => User)
    user: User;
}

import { Opcion } from "src/entities/opcion.entity";
import { User } from "src/entities/user.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Invitado {

    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @OneToOne(() => User)
    user: User;

    @Column({default: true, type: "boolean", select: false})
    activo: boolean;
}

import { Opcion } from "src/entities/opcion.entity";
import { User } from "src/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Invitado {

    @PrimaryGeneratedColumn("uuid")
    id?: string;
    
    @Column({default: true, type: "boolean", select: false})
    activo: boolean;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}

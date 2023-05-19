import { User } from "src/entities/user.entity";
import { Comunidad } from "src/entities/comunidad.entity";
import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Secretario {

    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    fechaInicio: string;

    @Column()
    fechaFin: string;

    @Column({default: true, type: "boolean", select: false})
    activo: boolean;

    @OneToOne(() => User)
    user: User

    @ManyToMany(() => Comunidad)
    comunidades: Comunidad[];
}

import { User } from "src/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Anfitrion {

    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column({default: true, type: "boolean", select: false})
    activo: boolean;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}

import { User } from "src/user/entities/user.entity";
import { Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Anfitrion {

    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @OneToOne(() => User)
    user: User;
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Grupo {
    
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    nombre: string;

    @Column()
    imagen: string;

    @Column({default: true, type: "boolean", select: false})
    activo: boolean;
}
